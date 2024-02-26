import axios from 'axios';

/**
 * より簡単にブラウザー側の結合テストを行うために、kintone.proxyをラップする。
 * Kintoneの内のブラウザ側の結合テストは通常のHTTP requestが使えないので、kintone.proxyを使う
 * 
 * kintoneじゃない環境では、axiosを使う。
 * 
 * @see https://cybozu.dev/ja/kintone/docs/js-api/proxy/kintone-proxy/
 */
export const kintoneProxyWrapper = async <D = unknown, S = unknown>(params: {
	url: string;
	method: 'GET' | 'POST' | 'PUT' | 'DELETE';
	headers: Record<string, string>;
	data?: Record<string, unknown>;
}) => {
	const {
		url,
		method,
		headers,
		data,
	} = params;

	if (typeof(kintone) !== 'undefined') {
  
		const result = await kintone.proxy(url, method, headers, data ?? {});

		const [body, status] = result;

		if (status !== 200) throw new Error(body as string);

		return {
			data: JSON.parse(body as string) as D,
			status: status as S,
		};
	}
 
	const result = await axios({
		url,
		method,
		headers,
		data,
	});

	return {
		data: result.data as D,
		status: result.status as S,
	};
  

};