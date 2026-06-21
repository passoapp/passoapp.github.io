const STORE_LINKS = {
    ios: "https://apps.apple.com/app/id6757607918",
    mac: "https://apps.apple.com/app/id6757607918"
};

document.querySelectorAll("[data-store-link]").forEach((link) => {
    const target = link.getAttribute("data-store-link");
    if (target && STORE_LINKS[target]) {
        link.setAttribute("href", STORE_LINKS[target]);
    }
});

const translations = {
    en: {
        title: "Passo | Password Manager",
        description: "Passo is a beautiful, native password manager for iPhone and Mac with local libraries, biometric unlock, iCloud sync, and passkeys.",
        nav_features: "Features",
        nav_pricing: "Pricing",
        nav_platforms: "Platforms",
        nav_privacy: "Privacy",
        cta_get: "Get Passo",
        hero_eyebrow: "<span class=\"pulse-dot\"></span> Next-gen Password Manager",
        hero_title: "Passwords &amp; passkeys,<br> <span class=\"text-gradient\">beautifully secure.</span>",
        hero_text: "Passo is a stunningly secure password manager for iPhone and Mac, featuring instant unlock, seamless iCloud sync, and native biometric integration.",
        hero_dl_ios: "Download for iOS",
        hero_dl_mac: "Download for Mac",
        point_local: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"></path></svg> Local Vault",
        point_bio: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 7V5a2 2 0 0 1 2-2h2\"/><path d=\"M17 3h2a2 2 0 0 1 2 2v2\"/><path d=\"M21 17v2a2 2 0 0 1-2 2h-2\"/><path d=\"M7 21H5a2 2 0 0 1-2-2v-2\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></svg> Face ID / Touch ID",
        point_sync: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10c-.394 0-.77.05-1.127.143A6.985 6.985 0 0 0 10 4a7 7 0 0 0-6.91 8A4.5 4.5 0 0 0 4.5 21H17z\"></path></svg> iCloud sync",
        mock_all: "<div class=\"mock-icon\"></div> All Items",
        mock_fav: "<div class=\"mock-icon star\"></div> Favorites",
        mock_passkeys: "<div class=\"mock-icon key\"></div> Passkeys",
        mock_cards: "<div class=\"mock-icon card\"></div> Cards",
        mock_search: "<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"11\" cy=\"11\" r=\"8\"></circle><path d=\"m21 21-4.35-4.35\"></path></svg> Search passwords...",
        mock_unlocked: "Unlocked",
        badge_passkey: "Passkey",
        badge_password: "Password",
        badge_card: "Card",
        feat_eyebrow: "Core features",
        feat_title: "Everything important,<br>without the noise.",
        feat1_title: "Secure by default",
        feat1_desc: "Encrypted local vaults and seamless biometric unlock, right out of the box.",
        feat2_title: "Moves with you",
        feat2_desc: "End-to-end encrypted iCloud sync keeps your credentials updated across all Apple devices.",
        feat3_title: "Easy to switch",
        feat3_desc: "Import instantly from 1Password, Bitwarden, Apple Passwords, Elpass, or a previous Passo export.",
        feat4_title: "Browser-ready",
        feat4_desc: "Lightning-fast autofill for Safari and Chrome with native iOS and macOS extension support.",
        feat5_title: "Developer CLI",
        feat5_desc: "Manage your passwords directly from the terminal with a secure and fast macOS CLI tool.",
        pricing_eyebrow: "Pricing",
        pricing_title: "Simple pricing, no surprises.",
        pricing_subtitle: "Everything you need is free to start. Unlock iCloud sync for the full cross-device experience.",
        pricing_annual: "Annual",
        pricing_monthly: "Monthly",
        plan_free_name: "Free",
        plan_free_period: "Forever",
        plan_free_desc: "Full-featured local vault with biometric unlock. No subscription needed.",
        feat_unlimited: "Unlimited passwords & passkeys",
        feat_biometric: "Face ID & Touch ID",
        feat_import: "Import from 1Password, Bitwarden & more",
        feat_autofill: "Safari & Chrome autofill",
        feat_cli_free: "Developer CLI",
        feat_sync_lock: "iCloud sync (Premium)",
        plan_free_cta: "Download Free",
        plan_premium_name: "Premium",
        plan_badge_best: "Best value",
        plan_premium_desc: "Everything in Free, plus seamless iCloud sync across all your Apple devices.",
        feat_all_free: "Everything in Free",
        feat_sync: "iCloud sync, end-to-end encrypted",
        feat_multidevice: "iPhone, iPad & Mac, always in sync",
        feat_priority: "Priority support",
        plan_premium_cta: "Start 1-Month Free Trial",
        pricing_footnote: "Subscriptions managed by Apple. Cancel anytime in App Store.",
        plan_premium_period_annual: "/year",
        plan_premium_period_monthly: "/month",
        price_note_annual: "≈ $0.83/mo · 1-Month Free Trial",
        price_note_monthly: "$0.99/mo · 1-Month Free Trial",
        cta_eyebrow: "Get Passo",
        cta_title: "Clean, native password management for iPhone and Mac.",
        cta_dl_ios: "Download for iPhone",
        cta_dl_mac: "Download for Mac",
        chip_ios: "iOS &amp; iPadOS",
        chip_mac: "macOS Native",
        chip_safari: "Safari Extension",
        chip_passkeys: "Passkeys",
        chip_cli: "Developer CLI"
    },
    zh: {
        title: "Passo | 密码管理器",
        description: "Passo 是一款为 iPhone 和 Mac 打造的密码管理器，原生且精美。提供本地密码库、生物识别解锁、iCloud 同步及通行密钥支持。",
        nav_features: "功能",
        nav_pricing: "价格",
        nav_platforms: "平台",
        nav_privacy: "隐私",
        cta_get: "获取 Passo",
        hero_eyebrow: "<span class=\"pulse-dot\"></span> 新一代密码管理器",
        hero_title: "密码与通行密钥，<br> <span class=\"text-gradient\">优美，且绝对安全。</span>",
        hero_text: "Passo 是一款极为安全且赏心悦目的 iPhone 和 Mac 密码管理器。带来瞬间解锁、无缝 iCloud 同步以及原生的生物识别集成体验。",
        hero_dl_ios: "下载 iOS 版",
        hero_dl_mac: "下载 Mac 版",
        point_local: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"></path></svg> 本地密码库",
        point_bio: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 7V5a2 2 0 0 1 2-2h2\"/><path d=\"M17 3h2a2 2 0 0 1 2 2v2\"/><path d=\"M21 17v2a2 2 0 0 1-2 2h-2\"/><path d=\"M7 21H5a2 2 0 0 1-2-2v-2\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></svg> Face ID / Touch ID",
        point_sync: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10c-.394 0-.77.05-1.127.143A6.985 6.985 0 0 0 10 4a7 7 0 0 0-6.91 8A4.5 4.5 0 0 0 4.5 21H17z\"></path></svg> iCloud 同步",
        mock_all: "<div class=\"mock-icon\"></div> 所有项目",
        mock_fav: "<div class=\"mock-icon star\"></div> 个人收藏",
        mock_passkeys: "<div class=\"mock-icon key\"></div> 通行密钥",
        mock_cards: "<div class=\"mock-icon card\"></div> 银行卡",
        mock_search: "<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"11\" cy=\"11\" r=\"8\"></circle><path d=\"m21 21-4.35-4.35\"></path></svg> 搜索密码...",
        mock_unlocked: "已解锁",
        badge_passkey: "通行密钥",
        badge_password: "密码",
        badge_card: "银行卡",
        feat_eyebrow: "核心功能",
        feat_title: "恰到好处的强大，<br>剔除所有繁杂。",
        feat1_title: "生来安全",
        feat1_desc: "开箱即用：本地加密密码库，无缝支持生物识别解锁。",
        feat2_title: "如影随形",
        feat2_desc: "通过端到端加密的 iCloud 同步功能，让你的凭证在所有 Apple 设备间实时更新。",
        feat3_title: "轻松迁移",
        feat3_desc: "支持从 1Password、Bitwarden、Apple 密码、Elpass 一键导入，也能恢复之前的 Passo 备份。",
        feat4_title: "完美支持浏览器",
        feat4_desc: "提供原生 iOS 与 macOS 扩展支持，在 Safari 和 Chrome 中体验极速自动填充。",
        feat5_title: "开发者命令行",
        feat5_desc: "通过安全且快速的 macOS 命令行工具，直接在终端管理您的密码。",
        pricing_eyebrow: "收费方案",
        pricing_title: "价格透明，无隐形消费。",
        pricing_subtitle: "免费功能满足日常所需。升级 Premium 开启多设备 iCloud 无缝同步。",
        pricing_annual: "按年",
        pricing_monthly: "按月",
        plan_free_name: "免费版",
        plan_free_period: "永久免费",
        plan_free_desc: "功能完备的本地密码库与生物识别解锁，无需订阅。",
        feat_unlimited: "无限制的密码与通行密钥存储",
        feat_biometric: "支持 Face ID 与 Touch ID 解锁",
        feat_import: "支持从 1Password、Bitwarden 等导入",
        feat_autofill: "Safari 和 Chrome 浏览器自动填充",
        feat_cli_free: "开发者命令行工具 (CLI)",
        feat_sync_lock: "iCloud 多设备同步 (Premium)",
        plan_free_cta: "免费下载",
        plan_premium_name: "Premium 专业版",
        plan_badge_best: "最划算",
        plan_premium_desc: "包含免费版所有功能，外加跨设备 iCloud 自动同步。",
        feat_all_free: "包含免费版所有功能",
        feat_sync: "端到端加密的 iCloud 同步",
        feat_multidevice: "iPhone、iPad 与 Mac 实时同步",
        feat_priority: "优先技术支持",
        plan_premium_cta: "开始 1 个月免费试用",
        pricing_footnote: "订阅服务由 Apple 管理。可随时在 App Store 中取消。",
        plan_premium_period_annual: "/年",
        plan_premium_period_monthly: "/月",
        price_note_annual: "≈ $0.83/月 · 包含 1 个月免费试用",
        price_note_monthly: "$0.99/月 · 包含 1 个月免费试用",
        cta_eyebrow: "获取 Passo",
        cta_title: "纯粹、原生的 iPhone 和 Mac 密码管理体验。",
        cta_dl_ios: "下载 iPhone 版",
        cta_dl_mac: "下载 Mac 版",
        chip_ios: "iOS &amp; iPadOS",
        chip_mac: "macOS 原生",
        chip_safari: "Safari 扩展",
        chip_passkeys: "通行密钥",
        chip_cli: "开发者命令行 (CLI)"
    },
    ja: {
        title: "Passo | パスワードマネージャー",
        description: "Passoは、iPhoneとMacのために作られた、美しくネイティブなパスワードマネージャーです。ローカル保管庫、生体認証、iCloud同期、パスキーに完全対応しています。",
        nav_features: "機能",
        nav_pricing: "料金",
        nav_platforms: "プラットフォーム",
        nav_privacy: "プライバシー",
        cta_get: "Passoを入手",
        hero_eyebrow: "<span class=\"pulse-dot\"></span> 次世代のパスワードマネージャー",
        hero_title: "パスワードとパスキーを、<br> <span class=\"text-gradient\">美しく、そして安全に。</span>",
        hero_text: "Passoは、iPhoneとMacのためにデザインされた、安全で美しいパスワードマネージャー。瞬時のロック解除、シームレスなiCloud同期、そしてネイティブな生体認証で、あなたのデジタルライフを守ります。",
        hero_dl_ios: "iOS版をダウンロード",
        hero_dl_mac: "Mac版をダウンロード",
        point_local: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"></path></svg> ローカル保管庫",
        point_bio: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 7V5a2 2 0 0 1 2-2h2\"/><path d=\"M17 3h2a2 2 0 0 1 2 2v2\"/><path d=\"M21 17v2a2 2 0 0 1-2 2h-2\"/><path d=\"M7 21H5a2 2 0 0 1-2-2v-2\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></svg> Face ID / Touch ID",
        point_sync: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10c-.394 0-.77.05-1.127.143A6.985 6.985 0 0 0 10 4a7 7 0 0 0-6.91 8A4.5 4.5 0 0 0 4.5 21H17z\"></path></svg> iCloud 同期",
        mock_all: "<div class=\"mock-icon\"></div> すべての項目",
        mock_fav: "<div class=\"mock-icon star\"></div> お気に入り",
        mock_passkeys: "<div class=\"mock-icon key\"></div> パスキー",
        mock_cards: "<div class=\"mock-icon card\"></div> カード",
        mock_search: "<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"11\" cy=\"11\" r=\"8\"></circle><path d=\"m21 21-4.35-4.35\"></path></svg> パスワードを検索...",
        mock_unlocked: "ロック解除済み",
        badge_passkey: "パスキー",
        badge_password: "パスワード",
        badge_card: "カード",
        feat_eyebrow: "コア機能",
        feat_title: "洗練されたシンプルさの中に、<br>必要なすべてを。",
        feat1_title: "妥協のないセキュリティ",
        feat1_desc: "暗号化されたローカル保管庫と、シームレスな生体認証を標準サポート。",
        feat2_title: "いつでも、どこでも",
        feat2_desc: "エンドツーエンドで暗号化されたiCloud同期により、すべてのAppleデバイス間で認証情報を常に最新に保ちます。",
        feat3_title: "スムーズな移行",
        feat3_desc: "1Password、Bitwarden、Appleパスワード、Elpassからワンクリックでインポート。以前のPassoエクスポートファイルからも復元できます。",
        feat4_title: "ブラウザにも完璧に統合",
        feat4_desc: "ネイティブのiOSおよびmacOS拡張機能により、SafariやChromeでの超高速な自動入力を実現します。",
        feat5_title: "開発者向け CLI",
        feat5_desc: "安全で高速な macOS 用 CLI ツールを使用して、ターミナルから直接パスワードを管理できます。",
        pricing_eyebrow: "料金プラン",
        pricing_title: "シンプルな料金、安心の体験。",
        pricing_subtitle: "基本機能は永久に無料。PremiumにアップグレードしてiCloud同期を解放。",
        pricing_annual: "年額",
        pricing_monthly: "月額",
        plan_free_name: "無料版",
        plan_free_period: "永久無料",
        plan_free_desc: "生体認証に対応した高機能なローカル保管庫。サブスクは不要です。",
        feat_unlimited: "パスワードとパスキーの無制限保存",
        feat_biometric: "Face ID と Touch ID による生体認証",
        feat_import: "1Password、Bitwardenなどからのインポート",
        feat_autofill: "Safari と Chrome での自動入力",
        feat_cli_free: "開発者向け CLI ツール",
        feat_sync_lock: "iCloud 同期機能 (Premium専用)",
        plan_free_cta: "無料でダウンロード",
        plan_premium_name: "Premium",
        plan_badge_best: "お得",
        plan_premium_desc: "無料版の全機能に加え、すべてのAppleデバイス間でのiCloud同期が可能に。",
        feat_all_free: "無料版の全機能を含みます",
        feat_sync: "エンドツーエンドで暗号化されたiCloud同期",
        feat_multidevice: "iPhone、iPad、Macで常に最新の同期",
        feat_priority: "優先カスタマーサポート",
        plan_premium_cta: "1ヶ月無料トライアルを開始",
        pricing_footnote: "サブスクリプションはAppleによって管理されます。いつでも設定からキャンセル可能です。",
        plan_premium_period_annual: "/年",
        plan_premium_period_monthly: "/月",
        price_note_annual: "約 $0.83/月 · 1ヶ月無料トライアル",
        price_note_monthly: "$0.99/月 · 1ヶ月無料トライアル",
        cta_eyebrow: "Passoを入手",
        cta_title: "iPhoneとMacのための、洗練されたネイティブなパスワード管理体験。",
        cta_dl_ios: "iPhone版をダウンロード",
        cta_dl_mac: "Mac版をダウンロード",
        chip_ios: "iOS &amp; iPadOS",
        chip_mac: "macOS ネイティブ",
        chip_safari: "Safari 拡張機能",
        chip_passkeys: "パスキー",
        chip_cli: "開発者向け CLI"
    }
};

window.updatePricingDisplay = function(lang) {
    if (!translations[lang]) return;
    const toggleAnnual = document.getElementById('toggle-annual');
    const premiumPriceAmount = document.getElementById('premium-price-amount');
    const premiumPricePeriod = document.getElementById('premium-price-period');
    const premiumPriceNote = document.getElementById('premium-price-note');
    if (premiumPriceAmount && premiumPricePeriod && premiumPriceNote) {
        const isAnnual = toggleAnnual ? toggleAnnual.classList.contains('active') : true;
        if (isAnnual) {
            premiumPriceAmount.textContent = '$9.99';
            premiumPricePeriod.textContent = translations[lang].plan_premium_period_annual || '/year';
            premiumPriceNote.textContent = translations[lang].price_note_annual || '≈ $0.83/mo · 1 Month Free Trial';
        } else {
            premiumPriceAmount.textContent = '$0.99';
            premiumPricePeriod.textContent = translations[lang].plan_premium_period_monthly || '/month';
            premiumPriceNote.textContent = translations[lang].price_note_monthly || '$0.99/mo · 1 Month Free Trial';
        }
    }
};

window.setLanguage = function(lang) {
    if (!translations[lang]) return;
    
    document.documentElement.lang = lang;
    localStorage.setItem('passo_lang', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (key === 'title') {
                document.title = translations[lang][key];
            } else if (key === 'description') {
                el.setAttribute('content', translations[lang][key]);
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    updatePricingDisplay(lang);
};

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('passo_lang');
    const browserLang = navigator.language.slice(0, 2);
    
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    
    let defaultLang = 'en';
    if (urlLang && translations[urlLang]) {
        defaultLang = urlLang;
    } else if (savedLang && translations[savedLang]) {
        defaultLang = savedLang;
    } else if (translations[browserLang]) {
        defaultLang = browserLang;
    }
    
    const select = document.getElementById('lang-select');
    if (select) {
        select.value = defaultLang;
    }
    
    // Set language first to render texts
    setLanguage(defaultLang);

    // Pricing toggle listeners
    const toggleAnnual = document.getElementById('toggle-annual');
    const toggleMonthly = document.getElementById('toggle-monthly');
    const premiumPriceAmount = document.getElementById('premium-price-amount');

    if (toggleAnnual && toggleMonthly && premiumPriceAmount) {
        let priceChangeTimeout;
        const updatePrice = () => {
            clearTimeout(priceChangeTimeout);
            premiumPriceAmount.classList.add('changing');
            priceChangeTimeout = setTimeout(() => {
                updatePricingDisplay(document.documentElement.lang || 'en');
                premiumPriceAmount.classList.remove('changing');
            }, 250);
        };

        toggleAnnual.addEventListener('click', () => {
            if (!toggleAnnual.classList.contains('active')) {
                toggleAnnual.classList.add('active');
                toggleAnnual.setAttribute('aria-pressed', 'true');
                toggleMonthly.classList.remove('active');
                toggleMonthly.setAttribute('aria-pressed', 'false');
                updatePrice();
            }
        });

        toggleMonthly.addEventListener('click', () => {
            if (!toggleMonthly.classList.contains('active')) {
                toggleMonthly.classList.add('active');
                toggleMonthly.setAttribute('aria-pressed', 'true');
                toggleAnnual.classList.remove('active');
                toggleAnnual.setAttribute('aria-pressed', 'false');
                updatePrice();
            }
        });
    }
});
