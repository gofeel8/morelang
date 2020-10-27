package com.morelang.service;

import java.net.URL;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.morelang.util.Https;

@Service
public class TranslateServiceImpl implements TranslateService {

	final static String REST_API_KEY = "e852b5b6b1d40103d1bc8dfa69a0bd6c";

	@Override
	public String translate(String src_lang, String target_lang, String query) throws Exception {
		URL url = new URL("https://dapi.kakao.com/v2/translation/translate?" + "src_lang=" + src_lang + "&target_lang="
				+ target_lang + "&query=" + URLEncoder.encode(query, "utf-8"));
		Map<String, String> props = new HashMap<>();
		props.put("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
		props.put("Authorization", "KakaoAK " + REST_API_KEY);
		String s = Https.get(url, props);
		s = s.substring(22, s.length() - 4);

		return s;
	}

}
