// loader-v1.js
const url = 'https://raw.githubusercontent.com/xellardev/RB/refs/heads/hubs/NL-Beta.lua';

fetch(url)
  .then(r => r.text())
  .then(lua => {
    // Для Roblox: loadstring(lua)()
    console.log('Loader v1 загружен:');
    console.log(lua);
    document.getElementById('content').innerText = lua;
  })
  .catch(() => {
    document.getElementById('content').innerText = 'Ошибка загрузки loader.v1';
  });
