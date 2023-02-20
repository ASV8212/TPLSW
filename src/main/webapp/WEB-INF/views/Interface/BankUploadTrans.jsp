<!--<html>
	<body onload='document.autoform.submit();'>
		<form name='autoform' method='post' action='https://demo.perfios.com/KuberaVault/insights/start'>
			<input type='hidden' name='payload' value='<payload><apiVersion>2.1</apiVersion><vendorId>tvsCredit</vendorId><txnId>Acme</txnId><transactionCompleteCallbackUrl>http://20.198.80.211:6065/TPLSW/NetBankingRes</transactionCompleteCallbackUrl><emailId>2da4fbbf2d52728ef4e825f318143be238eae4bb94ae2a15ac65537617242a0ea90c9a82bc508502ebcedce62814f496fd77c943f86f20ca68595a1df86c9093da635e95af827f635c4465c32a44a794102a30866df58e981ea81da2ec5423f92e3c204c7fe77708e4f8a4bee2570d8c32e9694b5cd8d14a4ca2cf1f9fa19950f1317b803c5587f530682d248b5f0368dd3a22f330d40c69dfd5f30e1dacfdbff68ec0a1d694830c04bc6e1077d5ca5fdce5f5eea0b6cd1a54ec3f0a6763a5d7262de0dabf2cc5544812fa66ae4cb2a0463f18c790b138bbdbadcbdbbf78d3bf5de8b8ef5343ed750e165e98f8768cd2f6fabaad1532dd694325f240e89045ea4df14d408ad88a47299ea0e98be13d3db61c8ebf7f75027d1d0c372373b841c698e64025dd8ca9cfbf884cd33cc0d76ae8d98137c725d5ac488b8f9c4b655d017b726fd2b93c5175b16dcb00fb07c7718aa1608a22be891b29e17eb70be04794261420b1820242d9bf6959c1a83861e86d19d20c3cc258610a3dc7f0a23f08f2e20ee4e8ca68882827d20efffa35885250d75975fc5ebcecebca297700167a7f4244b7ca6b045d4b2eded62c6bec53da6c763e83594aaa1449b852429d81480ff851a1a09826feae110d72fd7593a68620588cde7657c4fdd4b7f23685ff2c57b03935eebb984da472300fcbb872d83a29804023f52acfa391801fbea3bdd2c0</emailId><acceptancePolicy>atLeastOneTransactionPerMonthInRange</acceptancePolicy><yearMonthFrom>2021-11</yearMonthFrom><yearMonthTo>2021-11</yearMonthTo><destination>netbankingFetch</destination><returnUrl>https://webhook.site/e81bacf6-5b25-40cd-9104-2afe1f6be964</returnUrl><facility>CC</facility><sanctionLimitFixed>true</sanctionLimitFixed><sanctionLimitFixedAmount>2500</sanctionLimitFixedAmount><sanctionLimitVariableAmounts><variableAmount><amount>1000</amount></variableAmount></sanctionLimitVariableAmounts><drawingPowerVariableAmounts><variableAmount><amount>1000</amount></variableAmount></drawingPowerVariableAmounts></payload>'>
			<input type='hidden' name='signature' value='a1c2c4ab14b1806ea9b32a1e212441897d4400ed0d748404229f79e8cb503a650f82b12324e34e55cced1421f4c623cae2349983bbdf9c8a82cfd77d4a4a71c79554641e19f243f5eaf0419477f87d435f8f2727c42eaa9f8838cc15be8ceadaf56266ca1687f69692c8c9991526e0aab8716f0403ad9cfbc4cdcbb70b1f593ba5cb8ad115b8015aa94fe421e4e55355d07811811179007ed95f6fb0aba85303c5da0ad093f206503fd8dce9c1dacd5cda6b5783dc9b14dc32603d2379e8207a904800cba040eef71a0f3e731d95208a0c6ef052bf98469d2b665494c24af5e35bc862bc98b983bea33dc4f08867896d1a61a2fdfff84b1869cd77d2c450d66e45bd83d03401fa76f0bd0a2b5e1b8600fbb0fa78c91cbc7be71621be9f2af70c5165eaa1faa7c5b6a9de5ffa517b68d8da04586e8e72cca36da62c62863a0036e92dde7532a4d71ce2628be6c480b3817ac19cea388fe74d4c2b0ba476a56559390b14c5377e5b7383a4d79c8993b9d327dcdc4fa9d6c5a7bff3a30e1450c92cfe083c4f4f0057f42ba22365a32cf435fc72ff21e12a4f0c740723d8416dc569918d81dcc5a9e0d19810fd4bb0e1adc266db73abd04a06b9640eada4ebc3a5923cd970c9ad880febea4c50c9c17521719770eecdfb7f993baf1257a7c0b8ac9c0fa0797205b9abc60532ed75620707efd8cda560d65171b790a9d6aabaecc6e6'>
		</form>
	</body>
</html>
-->

<html>
	<body onload='document.autoform.submit();'>
		<form name='autoform' method='post' ENCTYPE='multipart/form-data' action='${URL}'>
			<fieldset>
			<legend>Upload the file one at a time</legend>
             File: <input type='file' name='file'><br>
             Password: <input type='text' name='password' value='"+ pwdEncrypted +"'><br>
             <input type='submit' name='submit' value='submit'>
             </fieldset>
       </form>
   </body>
</html>
