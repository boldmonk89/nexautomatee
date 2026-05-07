async function getIP() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    console.log('IP_START:' + data.ip + ':IP_END');
  } catch (e) {
    console.log('Failed to get IP');
  }
}
getIP();
