
# ContactPreferenceChannel

顧客へ**連絡する手段**。連絡拒否 (do-not-contact) の単位 (PLT-4053)。  [`ConsentChannel`] とは別物。あちらは「窓口で取ったか web で取ったか」 という受け取り経路で、こちらは「電話してよいか、郵便を送ってよいか」。 同じ列で2つの意味を持たせると、電話を拒否した顧客が「店頭で申し出た」 の意味の `store` として保存され、判定が壊れる。  テナント設定ではなく固定の集合にしてある。連絡可否を読む側（顧客を 抽出して案内を送る Cloud App）が、テナントごとのキー体系を知らずに 「連絡してよい相手」を求められることが要件そのもので、語彙が可変だと 判定が呼び出し側に戻ってしまう。業種非依存の手段だけを並べる。  接触履歴の [`crate::customer_contact::ContactChannel`] (PLT-4052) とも 別物。あちらは「実際にどの手段で接触したか」の記録で `visit` / `chat` / `other` を含み、こちらは「送ってよいか」を判定する到達手段だけに絞って ある。両方を `ContactChannel` と呼ぶと `order` の re-export で名前が 衝突するので、連絡可否側に接頭辞を付けている。

## Properties

Name | Type
------------ | -------------


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


