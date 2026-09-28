/* ===================================================
   शीतल धाम — Bilingual Support (Hindi / English)
   Usage: add data-i18n="key" on text elements
          add data-i18n-html="key" for elements with inner HTML
          add data-i18n-placeholder="key" for inputs/textareas
   =================================================== */

const TRANSLATIONS = {

  /* ── HINDI ───────────────────────────────────── */
  hi: {

    /* Navbar */
    'nav.brand.main' : 'शीतल धाम',
    'nav.brand.sub'  : 'समाज सेवा संस्थान',
    'nav.home'       : 'होम',
    'nav.about'      : 'हमारे बारे में',
    'nav.work'       : 'हमारे कार्य',
    'nav.gallery'    : 'गैलरी',
    'nav.donate'     : 'दान करें',

    /* Breadcrumbs */
    'bc.home'    : 'होम',
    'bc.about'   : 'हमारे बारे में',
    'bc.work'    : 'हमारे कार्य',
    'bc.gallery' : 'गैलरी',
    'bc.donate'  : 'दान करें',

    /* Footer */
    'footer.brand.name'  : 'शीतल धाम<br/>समाज सेवा संस्थान',
    'footer.tagline'     : 'गरीब, वंचित और जरूरतमंद लोगों की सेवा में समर्पित एक पंजीकृत सामाजिक संस्था, प्रतापगढ़, उत्तर प्रदेश।',
    'footer.quicklinks'  : 'त्वरित लिंक',
    'footer.services'    : 'हमारी सेवाएं',
    'footer.contact.hd'  : 'संपर्क करें',
    'footer.link.home'   : 'होम',
    'footer.link.about'  : 'हमारे बारे में',
    'footer.link.work'   : 'हमारे कार्य',
    'footer.link.gallery': 'गैलरी',
    'footer.link.donate' : 'दान करें',
    'footer.svc1'        : 'शिक्षा एवं प्रशिक्षण',
    'footer.svc2'        : 'स्वास्थ्य सेवाएं',
    'footer.svc3'        : 'वृक्षारोपण',
    'footer.svc4'        : 'गौशाला',
    'footer.svc5'        : 'धर्म स्थल',
    'footer.addr'        : 'शीतल धाम मंदिर ग्राम देवारा, पूरे शीतल अहीर का पुरवा,<br/>पोस्ट कामापट्टी, प्रतापगढ़, उत्तर प्रदेश 230001',
    'footer.copy'        : '© 2025 शीतल धाम समाज सेवा संस्थान। सर्वाधिकार सुरक्षित।',

    /* ── INDEX page ─────────────────────────────── */
    'idx.hero.badge'    : 'प्रतापगढ़, उत्तर प्रदेश',
    'idx.hero.h1'       : 'शीतल धाम<br /><em>समाज सेवा संस्थान</em>',
    'idx.hero.tagline'  : 'समाज सेवा ही हमारा धर्म है',
    'idx.hero.desc'     : 'गरीब, निराश्रित और जरूरतमंद लोगों की सेवा में समर्पित यह संस्था शिक्षा, स्वास्थ्य, रोजगार एवं धार्मिक-सांस्कृतिक कार्यों के माध्यम से समाज का उत्थान करती है।',
    'idx.hero.btn1'     : 'हमारे कार्य देखें →',
    'idx.hero.btn2'     : 'सहयोग करें',
    'idx.hero.stat1'    : 'वर्षों का अनुभव',
    'idx.hero.stat2'    : 'सेवा कार्यक्रम',
    'idx.hero.stat3'    : 'लाभार्थी परिवार',

    'idx.stat1' : 'वर्षों की सेवा',
    'idx.stat2' : 'लाभार्थी परिवार',
    'idx.stat3' : 'आयोजित कार्यक्रम',
    'idx.stat4' : 'स्वयंसेवक',

    'idx.hl.label' : 'हमारी प्रमुख सेवाएं',
    'idx.hl.title' : 'जो हम करते हैं',
    'idx.hl.desc'  : 'समाज के हर वर्ग तक पहुंचना और उनके जीवन को बेहतर बनाना हमारा लक्ष्य है।',
    'idx.hl1.title': 'शिक्षा एवं प्रशिक्षण',
    'idx.hl1.desc' : 'प्राथमिक से उच्च स्तर तक शिक्षण संस्थानों की स्थापना, कम्प्यूटर शिक्षा और व्यावसायिक प्रशिक्षण कार्यक्रम।',
    'idx.hl2.title': 'स्वास्थ्य सेवाएं',
    'idx.hl2.desc' : 'अस्पताल, ब्लड बैंक, नर्सिंग और पॉलि-क्लीनिक की स्थापना तथा निर्धनों के लिए निःशुल्क चिकित्सा शिविर।',
    'idx.hl3.title': 'सामाजिक कल्याण',
    'idx.hl3.desc' : 'गरीब कन्याओं का विवाह, बेरोजगारों को रोजगार, विकलांगों की सहायता और आपदा राहत कार्य।',

    'idx.ap.label' : 'हमारे बारे में',
    'idx.ap.title' : 'शीतल धाम — सेवा, समर्पण और संस्कार',
    'idx.ap.p1'    : 'शीतल धाम समाज सेवा संस्थान, प्रतापगढ़ (उ.प्र.) एक पंजीकृत सामाजिक-धार्मिक संस्था है जो गरीब, वंचित और जरूरतमंद लोगों के कल्याण के लिए अनवरत कार्यरत है।',
    'idx.ap.p2'    : 'संस्था का मुख्य उद्देश्य समाज के हर वर्ग को — चाहे वह शिक्षा हो, स्वास्थ्य हो, रोजगार हो या आध्यात्मिक मार्गदर्शन — सहयोग और दिशा प्रदान करना है।',
    'idx.ap.li1'   : 'शीतल आहार प्याऊ एवं भोजन सेवा',
    'idx.ap.li2'   : 'कम्प्यूटर शिक्षा एवं व्यावसायिक प्रशिक्षण',
    'idx.ap.li3'   : 'धार्मिक-सांस्कृतिक कार्यक्रमों का आयोजन',
    'idx.ap.li4'   : 'गरीब कन्याओं के विवाह की व्यवस्था',
    'idx.ap.btn'   : 'और जानें →',
    'idx.ab.badge.num' : 'पंजीकृत',
    'idx.ab.badge.lbl' : 'सरकारी संस्था',

    'idx.cta.title': 'आपका सहयोग किसी की जिंदगी बदल सकता है',
    'idx.cta.desc' : 'एक छोटा सा दान भी किसी बच्चे की शिक्षा, किसी बीमार की दवा और किसी भूखे का भोजन बन सकता है।',
    'idx.cta.btn1' : '❤️ अभी दान करें',
    'idx.cta.btn2' : 'हमारे कार्य देखें',

    /* ── ABOUT page ─────────────────────────────── */
    'about.banner.title' : 'हमारे बारे में',
    'about.banner.desc'  : 'शीतल धाम — सेवा, समर्पण और संस्कार के मूल्यों पर आधारित एक सामाजिक संस्था',

    'about.intro.label' : 'संस्था परिचय',
    'about.intro.title' : 'शीतल धाम समाज सेवा संस्थान',
    'about.intro.p1'    : 'शीतल धाम समाज सेवा संस्थान, प्रतापगढ़ (उत्तर प्रदेश) एक पंजीकृत सामाजिक-धार्मिक संस्था है। यह संस्था गरीब, वंचित, निराश्रित और जरूरतमंद लोगों के कल्याण और उत्थान के लिए अनवरत कार्य कर रही है।',
    'about.intro.p2'    : 'संस्था की स्थापना का मूल उद्देश्य समाज के हर वर्ग को — चाहे वह शिक्षा हो, स्वास्थ्य हो, रोजगार हो या आध्यात्मिक मार्गदर्शन — उचित सहयोग और दिशा प्रदान करना है। "समाज सेवा ही हमारा धर्म है" — यही हमारा मूल मंत्र है।',
    'about.intro.p3'    : 'ग्राम देवारा, प्रतापगढ़ से आरंभ हुई यह संस्था आज शिक्षा, स्वास्थ्य, रोजगार, पर्यावरण संरक्षण, धार्मिक आयोजन और सामाजिक कल्याण के क्षेत्र में व्यापक कार्य कर रही है।',
    'about.chip1'       : 'प्रतापगढ़, उत्तर प्रदेश',
    'about.chip2'       : 'पंजीकृत संस्था',
    'about.chip3'       : 'सन् 2009 से सक्रिय',
    'about.chip4'       : '12 सेवा क्षेत्र',

    'about.mv.label'       : 'हमारा लक्ष्य',
    'about.mv.title'       : 'मिशन और विजन',
    'about.mission.title'  : 'हमारा मिशन',
    'about.mission.desc'   : 'समाज के गरीब, वंचित और जरूरतमंद वर्गों को शिक्षा, स्वास्थ्य, रोजगार और आध्यात्मिक मार्गदर्शन प्रदान करके उनके जीवन स्तर को उन्नत करना। धार्मिक एवं सांस्कृतिक कार्यक्रमों के माध्यम से समाज में सद्भावना और एकता का प्रसार करना।',
    'about.vision.title'   : 'हमारा विजन',
    'about.vision.desc'    : 'एक ऐसे समाज का निर्माण जहां हर व्यक्ति को समान अवसर प्राप्त हो, कोई भूखा न रहे, सभी को शिक्षा मिले, और समाज का प्रत्येक वर्ग सम्मान और सुरक्षा के साथ जीवन जी सके। "वसुधैव कुटुम्बकम्" की भावना को साकार करना।',

    'about.val.label'  : 'मूल सिद्धांत',
    'about.val.title'  : 'हमारे मूल्य',
    'about.val1.title' : 'सेवा',
    'about.val1.desc'  : 'निःस्वार्थ सेवा भाव से समाज के हर जरूरतमंद की मदद करना।',
    'about.val2.title' : 'समानता',
    'about.val2.desc'  : 'बिना किसी भेदभाव के समाज के हर वर्ग की सहायता करना।',
    'about.val3.title' : 'करुणा',
    'about.val3.desc'  : 'दीन-दुखियों के प्रति सहानुभूति और करुणा का भाव रखना।',
    'about.val4.title' : 'विकास',
    'about.val4.desc'  : 'शिक्षा और प्रशिक्षण के माध्यम से व्यक्तित्व का सर्वांगीण विकास।',
    'about.val5.title' : 'शांति',
    'about.val5.desc'  : 'धार्मिक सद्भावना और सामाजिक शांति का प्रसार करना।',
    'about.val6.title' : 'पारदर्शिता',
    'about.val6.desc'  : 'सभी कार्यों में पूर्ण पारदर्शिता और जवाबदेही।',

    'about.loc.label' : 'हमारा स्थान',
    'about.loc.title' : 'संस्था का पता एवं विवरण',

    'about.cta.title' : 'हमारे साथ जुड़ें',
    'about.cta.desc'  : 'आपका सहयोग, दान और समय इस संस्था को और मजबूत बनाता है।',

    /* ── WORK page ──────────────────────────────── */
    'work.banner.title' : 'हमारे कार्य',
    'work.banner.desc'  : '12 क्षेत्रों में फैली सेवा — शिक्षा से लेकर पर्यावरण तक, स्वास्थ्य से लेकर धर्म तक',

    'work.stat1' : 'सेवा क्षेत्र',
    'work.stat2' : 'लाभार्थी',
    'work.stat3' : 'वर्षों का अनुभव',
    'work.stat4' : 'आयोजित कार्यक्रम',

    'work.sec.label' : 'सेवा कार्यक्रम',
    'work.sec.title' : 'हमारे 12 प्रमुख सेवा कार्य',
    'work.sec.desc'  : 'संस्था इन 12 क्षेत्रों में निरंतर काम कर समाज के हर वर्ग तक पहुंच बनाती है।',

    'work.c1.title' : 'शीतल आहार प्याऊ एवं भोजन सेवा',
    'work.c1.desc'  : 'शीतल आहार की प्याऊ, निःशुल्क भोजन वितरण और कम्प्यूटर शिक्षा के माध्यम से जनोपयोगी सेवाओं की व्यवस्था करना।',
    'work.c1.tag'   : 'खाद्य सेवा',
    'work.c2.title' : 'धार्मिक-सांस्कृतिक मेले एवं आयोजन',
    'work.c2.desc'  : 'शिवशक्ति मेला, दशहरा मेला, रंगोत्सव तथा अन्य मेलों के दौरान दुकानों, खाने-पीने की व्यवस्था और धार्मिक-सांस्कृतिक कार्यक्रमों का आयोजन।',
    'work.c2.tag'   : 'सांस्कृतिक',
    'work.c3.title' : 'शिक्षण संस्थानों की स्थापना',
    'work.c3.desc'  : 'प्राथमिक से उच्च स्तरीय शिक्षण संस्थानों, कॉलेजों, तकनीकी प्रशिक्षण केंद्रों, पुस्तकालय एवं व्यावसायिक कोर्स हेतु संस्थाओं की स्थापना व संचालन।',
    'work.c3.tag'   : 'शिक्षा',
    'work.c4.title' : 'रोजगार के अवसर',
    'work.c4.desc'  : 'बेरोजगार, विकलांग और बेसहारा लोगों के लिए रोजगार के अवसर प्रदान करना, व्यावसायिक प्रशिक्षण देना और स्वरोजगार को बढ़ावा देना।',
    'work.c4.tag'   : 'रोजगार',
    'work.c5.title' : 'सामाजिक कल्याण कार्यक्रम',
    'work.c5.desc'  : 'धार्मिक, नैतिक, सामाजिक और आध्यात्मिक उत्थान के लिए कार्यक्रम, समाज सुधार की गतिविधियां एवं अच्छे विचारों का प्रसार।',
    'work.c5.tag'   : 'सामाजिक',
    'work.c6.title' : 'अस्पताल एवं स्वास्थ्य सेवाएं',
    'work.c6.desc'  : 'अस्पताल, चिकित्सालय, ब्लड बैंक सेंटर, ट्रेनिंग सेंटर, नर्सिंग, पॉलि-क्लीनिक, अनुसंधान एवं प्रयोगशालाओं का संचालन एवं स्थापना।',
    'work.c6.tag'   : 'स्वास्थ्य',
    'work.c7.title' : 'पर्यावरण संरक्षण एवं स्वच्छता',
    'work.c7.desc'  : 'प्राकृतिक पर्यावरण के संरक्षण हेतु वृक्षारोपण, शहरी एवं ग्रामीण क्षेत्रों में स्वच्छता अभियान जिससे प्रदूषण कम हो सके।',
    'work.c7.tag'   : 'पर्यावरण',
    'work.c8.title' : 'निर्धन एवं पिछड़े वर्गों की सहायता',
    'work.c8.desc'  : 'निर्धन ग्रामीण एवं पिछड़े वर्गों की सहायता और उनके लिए विशेष चिकित्सालय, आवास एवं जरूरी सुविधाओं की व्यवस्था।',
    'work.c8.tag'   : 'ग्रामीण सेवा',
    'work.c9.title' : 'धर्म स्थल एवं मंदिरों का निर्माण',
    'work.c9.desc'  : 'धार्मिक स्थलों, मंदिरों और आध्यात्मिक केंद्रों का निर्माण, जीर्णोद्धार एवं रखरखाव करना तथा तीर्थ यात्राओं का आयोजन।',
    'work.c9.tag'   : 'धार्मिक',
    'work.c10.title': 'गरीब कन्याओं का विवाह',
    'work.c10.desc' : 'आर्थिक रूप से कमजोर परिवारों की कन्याओं के विवाह की व्यवस्था करना, उनकी सहायता करना और सामूहिक विवाह कार्यक्रम आयोजित करना।',
    'work.c10.tag'  : 'विवाह सहायता',
    'work.c11.title': 'आपदा राहत कार्य',
    'work.c11.desc' : 'बाढ़, भूकंप, महामारी तथा अन्य प्राकृतिक-मानवीय आपदाओं के समय तुरंत राहत सामग्री वितरण, चिकित्सा सहायता एवं पुनर्वास।',
    'work.c11.tag'  : 'आपदा राहत',
    'work.c12.title': 'गौशाला एवं गौ सेवा',
    'work.c12.desc' : 'गाय और अन्य पशुओं के लिए गौशाला का संचालन, उनकी देखभाल, चिकित्सा और संरक्षण करना।',
    'work.c12.tag'  : 'गौ सेवा',

    'work.cta.title': 'आपके सहयोग से हम और कर सकते हैं',
    'work.cta.desc' : 'दान करके इन 12 सेवा कार्यों को और व्यापक बनाएं।',

    /* ── GALLERY page ───────────────────────────── */
    'gal.banner.title' : 'गैलरी',
    'gal.banner.desc'  : 'हमारे कार्यक्रमों, आयोजनों और सेवा गतिविधियों की रंगीन झलकियां',
    'gal.filter.all'   : 'सभी',
    'gal.filter.mela'  : 'मेले',
    'gal.filter.edu'   : 'शिक्षा',
    'gal.filter.health': 'स्वास्थ्य',
    'gal.filter.nature': 'पर्यावरण',
    'gal.filter.social': 'सामाजिक',
    'gal.cta.title'    : 'आपके साथ से यही संभव है',
    'gal.cta.desc'     : 'आपके दान और सहयोग से हम इन कार्यक्रमों को और व्यापक बना सकते हैं।',
    'gal.cta.btn1'     : '❤️ दान करें',
    'gal.cta.btn2'     : '🎯 हमारे कार्य देखें',

    /* ── DONATE page ────────────────────────────── */
    'don.banner.title' : 'दान करें',
    'don.banner.desc'  : 'आपका एक सहयोग एक परिवार की जिंदगी बदल सकता है — आगे आएं, दान करें',

    'don.hero.title'   : 'आपका दान — किसी की मुस्कान',
    'don.hero.desc'    : 'शीतल धाम समाज सेवा संस्थान को दान करके आप शिक्षा, स्वास्थ्य, भोजन, विवाह सहायता और अनेक सामाजिक कार्यों में प्रत्यक्ष योगदान देते हैं।',
    'don.hero.prompt'  : 'राशि चुनें या कस्टम राशि दर्ज करें:',
    'don.chip.other'   : 'अन्य राशि',
    'don.btn1'         : '❤️ अभी दान करें',
    'don.btn2'         : '📞 संपर्क करें',
    'don.secure'       : '🔒 आपका दान पूरी तरह सुरक्षित है। संस्था 80G प्रमाणित है — आयकर छूट प्राप्त।',

    'don.impact.label' : 'आपके दान का प्रभाव',
    'don.impact.title' : 'हर रुपया मायने रखता है',
    'don.impact1'      : 'एक परिवार को एक दिन का भोजन',
    'don.impact2'      : 'एक बच्चे की एक महीने की शिक्षा',
    'don.impact3'      : 'एक बीमार व्यक्ति की दवाएं',
    'don.impact4'      : '10 पौधे लगाना और उनकी देखभाल',

    'pay.label'         : 'भुगतान के तरीके',
    'pay.title'         : 'दान के विकल्प',
    'pay.desc'          : 'नीचे दिए गए किसी भी माध्यम से दान करें और अपना नाम, पता तथा संपर्क नंबर अवश्य भेजें।',
    'pay.bank.title'    : 'बैंक ट्रांसफर / NEFT / RTGS',
    'pay.upi.title'     : 'UPI / Google Pay / PhonePe',
    'pay.cheque.title'  : 'चेक / डिमांड ड्राफ्ट',
    'pay.cheque.80g'    : '✅ संस्था 80G पंजीकृत है। दान पर आयकर अधिनियम की धारा 80G के तहत छूट प्राप्त होगी।',
    'pay.cheque.receipt': '📜 रसीद के लिए अपना नाम, पता और PAN नंबर अवश्य भेजें।',

    'contact.label'          : 'संपर्क करें',
    'contact.title'          : 'हमसे संपर्क करें',
    'contact.desc'           : 'किसी भी जानकारी, सहयोग या स्वयंसेवा के लिए हमसे संपर्क करें।',
    'contact.info.title'     : 'संपर्क जानकारी',
    'contact.addr.label'     : 'पता',
    'contact.phone.label'    : 'फोन',
    'contact.wp.label'       : 'WhatsApp',
    'contact.email.label'    : 'ईमेल',
    'contact.hours.label'    : 'कार्यालय समय',
    'contact.hours.value'    : 'सोमवार – शनिवार<br/>प्रातः 9:00 – सायं 6:00',
    'contact.social.title'   : 'सोशल मीडिया',
    'contact.form.title'     : 'संदेश भेजें',
    'contact.form.name.lbl'  : 'पूरा नाम *',
    'contact.form.name.ph'   : 'आपका नाम',
    'contact.form.phone.lbl' : 'मोबाइल नंबर *',
    'contact.form.phone.ph'  : '+91 XXXXX XXXXX',
    'contact.form.email.lbl' : 'ईमेल (वैकल्पिक)',
    'contact.form.email.ph'  : 'your@email.com',
    'contact.form.subj.lbl'  : 'विषय *',
    'contact.form.subj.def'  : 'विषय चुनें',
    'contact.form.opt1'      : 'दान / सहयोग',
    'contact.form.opt2'      : 'स्वयंसेवक बनना चाहते हैं',
    'contact.form.opt3'      : 'कार्यक्रम की जानकारी',
    'contact.form.opt4'      : 'सहायता चाहिए',
    'contact.form.opt5'      : 'अन्य',
    'contact.form.msg.lbl'   : 'संदेश *',
    'contact.form.msg.ph'    : 'अपना संदेश यहाँ लिखें...',
    'contact.form.submit'    : '📨 संदेश भेजें',
    'contact.form.success'   : '✅ आपका संदेश सफलतापूर्वक भेज दिया गया। हम जल्द ही आपसे संपर्क करेंगे।',

    'vol.title' : 'स्वयंसेवक बनें',
    'vol.desc'  : 'यदि आप शिक्षा, स्वास्थ्य, पर्यावरण या किसी भी सेवा कार्य में योगदान देना चाहते हैं, तो आज ही जुड़ें। आपका समय और कौशल भी एक बड़ा दान है।',
    'vol.btn'   : '🙋 स्वयंसेवक के रूप में जुड़ें',

    'don.cta.quote' : '"दान वो है जो दिल से दिया जाए"',
    'don.cta.desc'  : 'आपका छोटा कदम किसी के जीवन में बड़ा बदलाव ला सकता है। आगे आएं और इस सेवा यज्ञ में भागीदार बनें।',
    'don.cta.btn1'  : '❤️ अभी दान करें',
    'don.cta.btn2'  : '🎯 हमारे कार्य देखें',

    /* shared CTA */
    'cta.donate.btn' : '❤️ दान करें',
    'cta.work.btn'   : '🎯 हमारे कार्य देखें',
  },

  /* ── ENGLISH ─────────────────────────────────── */
  en: {

    /* Navbar */
    'nav.brand.main' : 'Sheetal Dham',
    'nav.brand.sub'  : 'Social Service Organization',
    'nav.home'       : 'Home',
    'nav.about'      : 'About Us',
    'nav.work'       : 'Our Work',
    'nav.gallery'    : 'Gallery',
    'nav.donate'     : 'Donate',

    /* Breadcrumbs */
    'bc.home'    : 'Home',
    'bc.about'   : 'About Us',
    'bc.work'    : 'Our Work',
    'bc.gallery' : 'Gallery',
    'bc.donate'  : 'Donate',

    /* Footer */
    'footer.brand.name'  : 'Sheetal Dham<br/>Social Service Org.',
    'footer.tagline'     : 'A registered social organization dedicated to serving the poor, deprived and needy of Pratapgarh, Uttar Pradesh.',
    'footer.quicklinks'  : 'Quick Links',
    'footer.services'    : 'Our Services',
    'footer.contact.hd'  : 'Contact Us',
    'footer.link.home'   : 'Home',
    'footer.link.about'  : 'About Us',
    'footer.link.work'   : 'Our Work',
    'footer.link.gallery': 'Gallery',
    'footer.link.donate' : 'Donate',
    'footer.svc1'        : 'Education & Training',
    'footer.svc2'        : 'Health Services',
    'footer.svc3'        : 'Tree Plantation',
    'footer.svc4'        : 'Gaushala',
    'footer.svc5'        : 'Religious Places',
    'footer.addr'        : 'Sheetal Dham Mandir, Gram Devara, Pure Sheetal Aheer Ka Purva,<br/>Post Kamapatty, Pratapgarh, Uttar Pradesh 230001',
    'footer.copy'        : '© 2025 Sheetal Dham Samaj Seva Sansthan. All rights reserved.',

    /* ── INDEX page ─────────────────────────────── */
    'idx.hero.badge'    : 'Pratapgarh, Uttar Pradesh',
    'idx.hero.h1'       : 'Sheetal Dham<br /><em>Social Service Organization</em>',
    'idx.hero.tagline'  : 'Social Service is Our Dharma',
    'idx.hero.desc'     : 'Dedicated to serving the poor, destitute and needy, this organization uplifts society through education, healthcare, employment and religious-cultural activities.',
    'idx.hero.btn1'     : 'View Our Work →',
    'idx.hero.btn2'     : 'Support Us',
    'idx.hero.stat1'    : 'Years of Experience',
    'idx.hero.stat2'    : 'Service Programs',
    'idx.hero.stat3'    : 'Beneficiary Families',

    'idx.stat1' : 'Years of Service',
    'idx.stat2' : 'Beneficiary Families',
    'idx.stat3' : 'Events Organized',
    'idx.stat4' : 'Volunteers',

    'idx.hl.label' : 'Our Key Services',
    'idx.hl.title' : 'What We Do',
    'idx.hl.desc'  : 'Our goal is to reach every section of society and improve their quality of life.',
    'idx.hl1.title': 'Education & Training',
    'idx.hl1.desc' : 'Establishing educational institutions from primary to higher levels, computer education and vocational training programs.',
    'idx.hl2.title': 'Health Services',
    'idx.hl2.desc' : 'Setting up hospitals, blood banks, nursing and poly-clinics, along with free medical camps for the underprivileged.',
    'idx.hl3.title': 'Social Welfare',
    'idx.hl3.desc' : 'Marriages of poor girls, employment for the unemployed, assistance to disabled and disaster relief work.',

    'idx.ap.label' : 'About Us',
    'idx.ap.title' : 'Sheetal Dham — Service, Dedication & Values',
    'idx.ap.p1'    : 'Sheetal Dham Samaj Seva Sansthan, Pratapgarh (U.P.) is a registered socio-religious organization continuously working for the welfare of the poor, deprived and needy.',
    'idx.ap.p2'    : 'The organization\'s main goal is to provide support and guidance to every section of society — whether education, health, employment or spiritual guidance.',
    'idx.ap.li1'   : 'Sheetal Aahar Water Kiosk & Food Service',
    'idx.ap.li2'   : 'Computer Education & Vocational Training',
    'idx.ap.li3'   : 'Organizing Religious & Cultural Programs',
    'idx.ap.li4'   : 'Arranging Marriages of Poor Girls',
    'idx.ap.btn'   : 'Learn More →',
    'idx.ab.badge.num' : 'Registered',
    'idx.ab.badge.lbl' : 'Govt. Organization',

    'idx.cta.title': 'Your Support Can Change Someone\'s Life',
    'idx.cta.desc' : 'Even a small donation can become a child\'s education, a patient\'s medicine, or a hungry person\'s meal.',
    'idx.cta.btn1' : '❤️ Donate Now',
    'idx.cta.btn2' : 'View Our Work',

    /* ── ABOUT page ─────────────────────────────── */
    'about.banner.title' : 'About Us',
    'about.banner.desc'  : 'Sheetal Dham — A social organization founded on the values of Service, Dedication & Culture',

    'about.intro.label' : 'Organization Introduction',
    'about.intro.title' : 'Sheetal Dham Samaj Seva Sansthan',
    'about.intro.p1'    : 'Sheetal Dham Samaj Seva Sansthan, Pratapgarh (Uttar Pradesh) is a registered socio-religious organization. This organization is continuously working for the welfare and upliftment of the poor, deprived, destitute and needy.',
    'about.intro.p2'    : 'The core purpose of the organization\'s establishment is to provide appropriate support and direction to every section of society — whether it be education, health, employment or spiritual guidance. "Social service is our Dharma" — this is our guiding principle.',
    'about.intro.p3'    : 'Originating from Gram Devara, Pratapgarh, this organization today works extensively in education, health, employment, environment conservation, religious events and social welfare.',
    'about.chip1'       : 'Pratapgarh, Uttar Pradesh',
    'about.chip2'       : 'Registered Organization',
    'about.chip3'       : 'Active since 2009',
    'about.chip4'       : '12 Service Sectors',

    'about.mv.label'       : 'Our Goal',
    'about.mv.title'       : 'Mission & Vision',
    'about.mission.title'  : 'Our Mission',
    'about.mission.desc'   : 'To uplift the poor, deprived and needy sections of society by providing education, health, employment and spiritual guidance. To spread goodwill and unity in society through religious and cultural programs.',
    'about.vision.title'   : 'Our Vision',
    'about.vision.desc'    : 'To build a society where every person gets equal opportunity, no one goes hungry, all receive education, and every section of society can live with dignity and security — embodying the spirit of "Vasudhaiva Kutumbakam".',

    'about.val.label'  : 'Core Principles',
    'about.val.title'  : 'Our Values',
    'about.val1.title' : 'Service',
    'about.val1.desc'  : 'Helping every needy person in society with selfless service.',
    'about.val2.title' : 'Equality',
    'about.val2.desc'  : 'Assisting every section of society without discrimination.',
    'about.val3.title' : 'Compassion',
    'about.val3.desc'  : 'Maintaining sympathy and compassion towards the poor and suffering.',
    'about.val4.title' : 'Development',
    'about.val4.desc'  : 'All-round development of personality through education and training.',
    'about.val5.title' : 'Peace',
    'about.val5.desc'  : 'Spreading religious harmony and social peace.',
    'about.val6.title' : 'Transparency',
    'about.val6.desc'  : 'Complete transparency and accountability in all activities.',

    'about.loc.label' : 'Our Location',
    'about.loc.title' : 'Organization Address & Details',

    'about.cta.title' : 'Join Hands With Us',
    'about.cta.desc'  : 'Your support, donation and time make this organization stronger.',

    /* ── WORK page ──────────────────────────────── */
    'work.banner.title' : 'Our Work',
    'work.banner.desc'  : 'Service spread across 12 sectors — from education to environment, from health to religion',

    'work.stat1' : 'Service Sectors',
    'work.stat2' : 'Beneficiaries',
    'work.stat3' : 'Years of Experience',
    'work.stat4' : 'Events Organized',

    'work.sec.label' : 'Service Programs',
    'work.sec.title' : 'Our 12 Key Service Activities',
    'work.sec.desc'  : 'The organization continuously works in these 12 sectors, reaching every section of society.',

    'work.c1.title' : 'Sheetal Aahar Water Kiosk & Food Service',
    'work.c1.desc'  : 'Arrangement of Sheetal Aahar water kiosk, free food distribution and computer education for public utility services.',
    'work.c1.tag'   : 'Food Service',
    'work.c2.title' : 'Religious-Cultural Fairs & Events',
    'work.c2.desc'  : 'Organizing Shivshakti Mela, Dussehra Mela, Holi and other fairs with food arrangements and religious-cultural programs.',
    'work.c2.tag'   : 'Cultural',
    'work.c3.title' : 'Establishing Educational Institutions',
    'work.c3.desc'  : 'Establishment and operation of educational institutions from primary to higher level, colleges, technical training centers, libraries and vocational courses.',
    'work.c3.tag'   : 'Education',
    'work.c4.title' : 'Employment Opportunities',
    'work.c4.desc'  : 'Providing employment opportunities for unemployed, disabled and destitute people, giving vocational training and promoting self-employment.',
    'work.c4.tag'   : 'Employment',
    'work.c5.title' : 'Social Welfare Programs',
    'work.c5.desc'  : 'Programs for religious, moral, social and spiritual upliftment, social reform activities and spreading good thoughts.',
    'work.c5.tag'   : 'Social',
    'work.c6.title' : 'Hospital & Health Services',
    'work.c6.desc'  : 'Operation and establishment of hospitals, clinics, blood bank centers, training centers, nursing, poly-clinics, research and laboratories.',
    'work.c6.tag'   : 'Health',
    'work.c7.title' : 'Environment Conservation & Cleanliness',
    'work.c7.desc'  : 'Tree plantation for protection of the natural environment, cleanliness campaigns in urban and rural areas to reduce pollution.',
    'work.c7.tag'   : 'Environment',
    'work.c8.title' : 'Assistance to Poor & Backward Classes',
    'work.c8.desc'  : 'Assistance to poor rural and backward classes, arranging special hospitals, housing and essential facilities for them.',
    'work.c8.tag'   : 'Rural Service',
    'work.c9.title' : 'Construction of Religious Places & Temples',
    'work.c9.desc'  : 'Construction, renovation and maintenance of religious places, temples and spiritual centers, and organizing pilgrimages.',
    'work.c9.tag'   : 'Religious',
    'work.c10.title': 'Marriage of Poor Girls',
    'work.c10.desc' : 'Arranging marriages of daughters from financially weak families, supporting them and organizing mass marriage programs.',
    'work.c10.tag'  : 'Marriage Support',
    'work.c11.title': 'Disaster Relief Work',
    'work.c11.desc' : 'Immediate relief distribution, medical assistance and rehabilitation during floods, earthquakes, epidemics and other disasters.',
    'work.c11.tag'  : 'Disaster Relief',
    'work.c12.title': 'Gaushala & Cow Service',
    'work.c12.desc' : 'Operating gaushala for cows and other animals, their care, medical treatment and protection.',
    'work.c12.tag'  : 'Cow Service',

    'work.cta.title': 'We Can Do More With Your Support',
    'work.cta.desc' : 'Donate to expand these 12 service activities further.',

    /* ── GALLERY page ───────────────────────────── */
    'gal.banner.title' : 'Gallery',
    'gal.banner.desc'  : 'Colorful glimpses of our programs, events and service activities',
    'gal.filter.all'   : 'All',
    'gal.filter.mela'  : 'Fairs',
    'gal.filter.edu'   : 'Education',
    'gal.filter.health': 'Health',
    'gal.filter.nature': 'Environment',
    'gal.filter.social': 'Social',
    'gal.cta.title'    : 'This Is Possible With Your Support',
    'gal.cta.desc'     : 'With your donation and cooperation, we can make these programs even more far-reaching.',
    'gal.cta.btn1'     : '❤️ Donate',
    'gal.cta.btn2'     : '🎯 View Our Work',

    /* ── DONATE page ────────────────────────────── */
    'don.banner.title' : 'Donate',
    'don.banner.desc'  : 'Your one contribution can change a family\'s life — come forward, donate',

    'don.hero.title'   : 'Your Donation — Someone\'s Smile',
    'don.hero.desc'    : 'By donating to Sheetal Dham Samaj Seva Sansthan, you directly contribute to education, health, food, marriage support and many social causes.',
    'don.hero.prompt'  : 'Choose an amount or enter a custom amount:',
    'don.chip.other'   : 'Other Amount',
    'don.btn1'         : '❤️ Donate Now',
    'don.btn2'         : '📞 Contact Us',
    'don.secure'       : '🔒 Your donation is completely secure. The organization is 80G certified — eligible for income tax exemption.',

    'don.impact.label' : 'Impact of Your Donation',
    'don.impact.title' : 'Every Rupee Counts',
    'don.impact1'      : 'One day\'s meal for a family',
    'don.impact2'      : 'One month\'s education for a child',
    'don.impact3'      : 'Medicines for a sick person',
    'don.impact4'      : 'Planting 10 saplings and their care',

    'pay.label'         : 'Payment Methods',
    'pay.title'         : 'Donation Options',
    'pay.desc'          : 'Donate through any method below and send your name, address and contact number.',
    'pay.bank.title'    : 'Bank Transfer / NEFT / RTGS',
    'pay.upi.title'     : 'UPI / Google Pay / PhonePe',
    'pay.cheque.title'  : 'Cheque / Demand Draft',
    'pay.cheque.80g'    : '✅ Organization is 80G registered. Donation is eligible for exemption under Section 80G of the Income Tax Act.',
    'pay.cheque.receipt': '📜 Please send your name, address and PAN number for the receipt.',

    'contact.label'          : 'Contact Us',
    'contact.title'          : 'Get In Touch',
    'contact.desc'           : 'Contact us for any information, support or volunteering.',
    'contact.info.title'     : 'Contact Information',
    'contact.addr.label'     : 'Address',
    'contact.phone.label'    : 'Phone',
    'contact.wp.label'       : 'WhatsApp',
    'contact.email.label'    : 'Email',
    'contact.hours.label'    : 'Office Hours',
    'contact.hours.value'    : 'Monday – Saturday<br/>9:00 AM – 6:00 PM',
    'contact.social.title'   : 'Social Media',
    'contact.form.title'     : 'Send a Message',
    'contact.form.name.lbl'  : 'Full Name *',
    'contact.form.name.ph'   : 'Your name',
    'contact.form.phone.lbl' : 'Mobile Number *',
    'contact.form.phone.ph'  : '+91 XXXXX XXXXX',
    'contact.form.email.lbl' : 'Email (Optional)',
    'contact.form.email.ph'  : 'your@email.com',
    'contact.form.subj.lbl'  : 'Subject *',
    'contact.form.subj.def'  : 'Choose a subject',
    'contact.form.opt1'      : 'Donation / Support',
    'contact.form.opt2'      : 'Want to Volunteer',
    'contact.form.opt3'      : 'Event Information',
    'contact.form.opt4'      : 'Need Assistance',
    'contact.form.opt5'      : 'Other',
    'contact.form.msg.lbl'   : 'Message *',
    'contact.form.msg.ph'    : 'Write your message here...',
    'contact.form.submit'    : '📨 Send Message',
    'contact.form.success'   : '✅ Your message has been sent successfully. We will contact you shortly.',

    'vol.title' : 'Become a Volunteer',
    'vol.desc'  : 'If you want to contribute in education, health, environment or any service work, join us today. Your time and skills are a great donation too.',
    'vol.btn'   : '🙋 Join as Volunteer',

    'don.cta.quote' : '"A donation given from the heart is the greatest"',
    'don.cta.desc'  : 'Your small step can bring a big change in someone\'s life. Come forward and be a part of this service.',
    'don.cta.btn1'  : '❤️ Donate Now',
    'don.cta.btn2'  : '🎯 View Our Work',

    /* shared CTA */
    'cta.donate.btn' : '❤️ Donate',
    'cta.work.btn'   : '🎯 View Our Work',
  }
};

/* ── Apply language to the current page ─────────── */
function applyLang(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  /* textContent replacements */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t[el.dataset.i18n];
    if (val !== undefined) el.textContent = val;
  });

  /* innerHTML replacements (for elements with inner tags) */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = t[el.dataset.i18nHtml];
    if (val !== undefined) el.innerHTML = val;
  });

  /* placeholder replacements */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = t[el.dataset.i18nPlaceholder];
    if (val !== undefined) el.placeholder = val;
  });

  /* <html lang> attribute */
  document.documentElement.lang = lang;

  /* toggle button state */
  const btn = document.getElementById('langToggle');
  if (btn) {
    btn.querySelector('.lang-active').textContent = lang === 'hi' ? 'हिं' : 'EN';
    btn.querySelector('.lang-other').textContent  = lang === 'hi' ? 'EN'  : 'हिं';
    btn.setAttribute('aria-label', lang === 'hi' ? 'Switch to English' : 'हिंदी में बदलें');
  }

  localStorage.setItem('shitaldham-lang', lang);
}

/* ── Boot ──────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('shitaldham-lang') || 'hi';
  applyLang(saved);

  const btn = document.getElementById('langToggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const current = localStorage.getItem('shitaldham-lang') || 'hi';
      applyLang(current === 'hi' ? 'en' : 'hi');
    });
  }
});
