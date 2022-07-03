let obj = JSON.parse($response.body || '{}');

obj.extra.adms_activity = {};
obj.extra.adms = [];
obj.extra.adms_user = [];
obj.extra.nearby_dating = [];

$done({
	body: JSON.stringify(obj)
});
