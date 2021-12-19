let obj = JSON.parse($response.body || '{}');

obj.extra.HAD_ADS = false;
obj.data = [];

$done({
	body: JSON.stringify(obj)
});
