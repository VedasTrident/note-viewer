document.getElementById('searchBtn').addEventListener('click', async () => {
  const username = document.getElementById('username').value.trim().replace('@', '');
  const statusDiv = document.getElementById('status');
  const button = document.getElementById('searchBtn');

  if (!username) {
    statusDiv.innerHTML = '<div class="status error">Please enter your username</div>';
    return;
  }

  button.disabled = true;
  statusDiv.innerHTML = '<div class="status info">Getting your cookie...</div>';

  try {
    // Get the substack.sid cookie
    const cookie = await chrome.cookies.get({
      url: 'https://substack.com',
      name: 'substack.sid'
    });

    if (!cookie) {
      throw new Error('Cookie not found. Please log in to Substack first.');
    }

    // Save username for next time
    chrome.storage.sync.set({ username });

    // Open the app with parameters
    const appUrl = `https://substack-notes-app.vercel.app?username=${encodeURIComponent(username)}&cookie=${encodeURIComponent(cookie.value)}`;

    chrome.tabs.create({ url: appUrl });

    statusDiv.innerHTML = '<div class="status success">✓ Opening app...</div>';

    setTimeout(() => window.close(), 1000);

  } catch (error) {
    console.error('Error:', error);
    statusDiv.innerHTML = `<div class="status error">Error: ${error.message}</div>`;
    button.disabled = false;
  }
});

// Load saved username on popup open
chrome.storage.sync.get(['username'], (result) => {
  if (result.username) {
    document.getElementById('username').value = result.username;
  }
});
