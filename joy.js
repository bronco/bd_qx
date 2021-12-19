let obj = JSON.parse($response.body || '{}');

obj.extra.ads = [];

$done({
	body: JSON.stringify(obj)
});
