let obj = JSON.parse($response.body || '{}');

if (Array.isArray(obj.data)) {
  let users = [];
  obj.data.forEach(element => {
    if(!!element.uid) users.push(element);
    if(element.profile_picture && Array.isArray(element.profile_picture)) users = users.concat(element.profile_picture);
  });
  obj.data = users;
}

$done({
	body: JSON.stringify(obj)
});
