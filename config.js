let obj = JSON.parse($response.body || '{}');

if (obj.data[0]) {
	obj.data[0].vip_split.is_filter_ads = 1;
  obj.data[0].is_filter_ads = 1;
  obj.data[0].is_ios_paid = 1;
}

$done({
	body: JSON.stringify(obj)
});
