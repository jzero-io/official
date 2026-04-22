


// 国际化翻译配置
const translations = {
    en: {
        // Navigation
        'nav.features': 'Features',
        'nav.ecosystem': 'Ecosystem',
        'nav.documentation': 'Documentation',

        // Hero
        'hero.title.line1': 'jzero + AI',
        'hero.title.line2': 'Efficient & Reliable Go Framework',
        'hero.subtitle': 'Auto-generate server and client code from api/proto/sql descriptive files. Built-in jzero-skills enables AI to generate best-practice business logic code.',
        'hero.cta.github': 'View on GitHub',
        'hero.cta.docs': 'Read the Docs',
        'hero.code.desc': 'One-Click Install jzero',
        'hero.code.title': 'Terminal',
        'hero.code.comment1': '# ✓ API server running on :8001',
        'hero.code.comment2': '# ✓ Swagger UI available at /swagger',

        // Features
        'features.title': 'Built for modern development',
        'features.subtitle': 'Everything you need to build scalable microservices in Go, without the complexity.',
        'features.1.title': 'Framework Code Auto-Generation',
        'features.1.desc': 'Generate basic framework code from api/proto/sql descriptive files.',
        'features.2.title': 'Business Logic Auto-Generation',
        'features.2.desc': 'Built-in jzero-skills enables AI to generate best-practice business logic code.',
        'features.3.title': 'Custom Template Code Generation',
        'features.3.desc': 'Support custom template code generation, build exclusive enterprise template repositories.',
        'features.4.title': 'Ecosystem Compatibility',
        'features.4.desc': 'Based on go-zero development, maintaining ecosystem compatibility while solving existing pain points and extending new features.',
        'features.5.title': 'Ready to Use',
        'features.5.desc': 'Generate code with minimal commands, built-in rich component library, support multi-database compatibility with the same codebase, and more.',
        'features.6.title': 'Plugin Architecture',
        'features.6.desc': 'Support multi-module collaborative development, ultimately compiled into monolithic service deployment. Easy plugin installation and removal for flexible architecture.',

        // Capabilities
        'capabilities.title': 'Packed with powerful features',
        'capabilities.subtitle': 'No matter the use case, jzero has you covered.',
        'cap.1': 'API Code Generation', 'cap.2': 'Gateway Services', 'cap.3': 'RPC Services',
        'cap.4': 'Service Discovery', 'cap.5': 'Load Balancing', 'cap.6': 'Circuit Breaker',
        'cap.7': 'Rate Limiting', 'cap.8': 'Database Support', 'cap.9': 'Redis Cache',
        'cap.10': 'Config Center', 'cap.11': 'Swagger UI', 'cap.12': 'Prometheus',
        'cap.13': 'JWT Auth', 'cap.14': 'Clean Architecture', 'cap.15': 'Docker',
        'cap.16': 'GitHub Actions', 'cap.17': 'Custom Templates', 'cap.18': 'Git-Diff',
        'cap.19': 'JetBrains Plugin', 'cap.20': 'Admin Dashboard',

        // Ecosystem
        'ecosystem.title': 'Related Ecosystem',
        'ecosystem.subtitle': 'Everything you need to build, deploy, and manage your microservices.',
        'eco.1.title': 'jzero-admin', 'eco.1.desc': 'Admin system developed based on jzero.',
        'eco.2.title': 'jzero-intellij', 'eco.2.desc': 'JetBrains/GoLand plugin for seamless IDE integration.',
        'eco.3.title': 'Plugins', 'eco.3.desc': 'Community plugins extending jzero functionality.',
        'eco.4.title': 'Templates', 'eco.4.desc': 'Curated template marketplace for quick project scaffolding.',
        'eco.5.title': 'GitHub Actions', 'eco.5.desc': 'GitHub workflows for automated CI/CD with jzero.',
        'eco.6.title': 'Examples', 'eco.6.desc': 'Example projects demonstrating jzero best practices.',

        // Quick Start
        'quickstart.title': 'Get started in minutes',
        'quickstart.subtitle': 'From zero to running microservices in under 5 minutes.',
        'qs.1.title': 'Install jzero', 'qs.1.code': 'go install github.com/jzero-io/jzero/cmd/jzero@latest', 'qs.1.desc': 'Install via Go or Docker',
        'qs.2.title': 'Create your project', 'qs.2.code': 'jzero new myproject\\ncd myproject\\ngo mod tidy', 'qs.2.desc': 'Generate a complete microservice',
        'qs.3.title': 'Run your service', 'qs.3.code': 'go run main.go server', 'qs.3.desc': 'Start with Swagger UI',
        'qs.4.title': 'Define your API', 'qs.4.code': 'jzero api', 'qs.4.desc': 'Generate code from definitions',
        'qs.cta.primary': 'Read Documentation', 'qs.cta.secondary': 'View Examples',

        // FAQ
        'faq.title': 'Frequently asked questions',
        'faq.1.q': 'How is jzero different from go-zero?',
        'faq.1.a': 'jzero builds on go-zero with enhanced tooling, AI-friendly architecture, and git-change-based code generation. Fully compatible with better DX.',
        'faq.2.q': 'Can I use jzero with existing go-zero projects?',
        'faq.2.a': 'Yes! jzero maintains full compatibility. Adopt features gradually without rewriting.',
        'faq.3.q': 'What databases does jzero support?',
        'faq.3.a': 'MySQL, PostgreSQL, MongoDB, Redis, and various config centers. No infrastructure lock-in.',
        'faq.4.q': 'How does AI integration work?',
        'faq.4.a': 'jzero-skills provides context for AI to generate best-practice business logic consistently.',
        'faq.5.q': 'Is jzero production-ready?',
        'faq.5.a': 'Absolutely. Powers enterprise-scale services with circuit breakers, rate limiting, and discovery.',

        // CTA
        'cta.title': 'Ready to build better microservices?',
        'cta.subtitle': 'Join developers shipping faster with jzero.',
        'cta.github': 'Star on GitHub', 'cta.docs': 'Read Documentation',

        // Footer
        'footer.brand': 'AI-friendly Go microservices framework built on go-zero.',
        'footer.product': 'Product', 'footer.resources': 'Resources', 'footer.community': 'Community',
        'footer.framework': 'jzero Framework', 'footer.admin': 'jzero-admin', 'footer.plugin': 'JetBrains Plugin', 'footer.examples': 'Examples',
        'footer.docs_link': 'Documentation', 'footer.releases': 'Releases', 'footer.issues': 'Issues', 'footer.deepwiki': 'DeepWiki',
        'footer.github_org': 'GitHub', 'footer.star_history': 'Star History', 'footer.contributing': 'Contributing',
        'footer.copyright': '© 2024-2026 jzero-io. MIT License.'
    },
    zh: {
        // Navigation
        'nav.features': '特性',
        'nav.ecosystem': '生态',
        'nav.documentation': '文档',

        // Hero
        'hero.title.line1': 'jzero + AI',
        'hero.title.line2': '高效可靠的 Go 框架',
        'hero.subtitle': '基于 api/proto/sql 可描述文件自动生成服务端与客户端代码，内置 jzero-skills，让 AI 生成符合最佳实践的业务逻辑代码。',
        'hero.cta.github': '查看 GitHub',
        'hero.cta.docs': '阅读文档',
        'hero.code.desc': '一键安装 jzero',
        'hero.code.title': '终端',
        'hero.code.comment1': '# ✓ API 服务运行在 :8001',
        'hero.code.comment2': '# ✓ Swagger UI 访问 /swagger',

        // Features
        'features.title': '为现代开发而构建',
        'features.subtitle': '构建可扩展 Go 微服务所需的一切，无需复杂配置。',
        'features.1.title': '基础框架代码自动生成',
        'features.1.desc': '基于 api/proto/sql 可描述文件生成基础框架代码。',
        'features.2.title': '业务逻辑代码自动生成',
        'features.2.desc': '内置 jzero-skills 让 AI 生成符合最佳实践的业务逻辑代码。',
        'features.3.title': '自定义模板代码生成',
        'features.3.desc': '支持自定义模板代码生成，构建专属企业模板仓库。',
        'features.4.title': '生态兼容',
        'features.4.desc': '基于 go-zero 开发保持生态兼容，同时解决已有的痛点问题并扩展新的功能。',
        'features.5.title': '开箱即用',
        'features.5.desc': '极简指令生成代码，内置丰富组件库，支持同一套代码多数据库兼容等。',
        'features.6.title': '支持插件架构',
        'features.6.desc': '支持多模块协同开发，最终编译成单体服务部署。可方便地进行插件的安装和卸载操作，灵活适配架构需求。',

        // Capabilities
        'capabilities.title': '强大功能集合',
        'capabilities.subtitle': '无论什么场景，jzero 都能满足需求。',
        'cap.1': 'API 代码生成', 'cap.2': '网关服务', 'cap.3': 'RPC 服务',
        'cap.4': '服务发现', 'cap.5': '负载均衡', 'cap.6': '熔断器',
        'cap.7': '限流', 'cap.8': '数据库支持', 'cap.9': 'Redis 缓存',
        'cap.10': '配置中心', 'cap.11': 'Swagger UI', 'cap.12': 'Prometheus',
        'cap.13': 'JWT 认证', 'cap.14': '清晰架构', 'cap.15': 'Docker',
        'cap.16': 'GitHub Actions', 'cap.17': '自定义模板', 'cap.18': 'Git 差异',
        'cap.19': 'JetBrains 插件', 'cap.20': '管理后台',

        // Ecosystem
        'ecosystem.title': '相关生态',
        'ecosystem.subtitle': '构建、部署和管理微服务所需的一切。',
        'eco.1.title': 'jzero-admin', 'eco.1.desc': '基于 jzero 开发的后台管理系统。',
        'eco.2.title': 'jzero-intellij', 'eco.2.desc': 'JetBrains/GoLand 插件，IDE 无缝集成。',
        'eco.3.title': '插件市场', 'eco.3.desc': '社区插件扩展 jzero 功能。',
        'eco.4.title': '模板市场', 'eco.4.desc': '精选模板市场，快速搭建项目脚手架。',
        'eco.5.title': 'GitHub 工作流', 'eco.5.desc': 'jzero 自动化 CI/CD 的 GitHub 工作流。',
        'eco.6.title': '示例项目', 'eco.6.desc': '展示 jzero 最佳实践的示例集合。',

        // Quick Start
        'quickstart.subtitle': '从零到运行微服务，不到 5 分钟。',
        'qs.1.title': '安装 jzero', 'qs.1.code': 'go install github.com/jzero-io/jzero/cmd/jzero@latest', 'qs.1.desc': 'Go 安装或 Docker',
        'qs.2.title': '创建项目', 'qs.2.code': 'jzero new myproject\\ncd myproject\\ngo mod tidy', 'qs.2.desc': '生成完整微服务',
        'qs.3.title': '运行服务', 'qs.3.code': 'go run main.go server', 'qs.3.desc': '启动并访问 Swagger',
        'qs.4.title': '定义 API', 'qs.4.code': 'jzero api', 'qs.4.desc': '从定义生成代码',
        'qs.cta.primary': '阅读文档', 'qs.cta.secondary': '查看示例',

        // FAQ
        'faq.title': '常见问题',
        'faq.1.q': 'jzero 与 go-zero 有什么区别？',
        'faq.1.a': 'jzero 在 go-zero 基础上增强工具链、AI 友好架构和 Git 增量生成。完全兼容且体验更好。',
        'faq.2.q': '可以在现有 go-zero 项目中使用吗？',
        'faq.2.a': '可以！jzero 保持完全兼容。可逐步采用，无需重写。',
        'faq.3.q': '支持哪些数据库？',
        'faq.3.a': 'MySQL、PostgreSQL、MongoDB、Redis 等。无基础设施锁定。',
        'faq.4.q': 'AI 集成如何工作？',
        'faq.4.a': 'jzero-skills 提供上下文，帮助 AI 理解代码库并持续生成最佳实践代码。',
        'faq.5.q': '可用于生产环境吗？',
        'faq.5.a': '当然。已用于企业级生产环境，具备熔断、限流、服务发现等弹性模式。',

        // CTA
        'cta.title': '准备好构建更好的微服务了吗？',
        'cta.subtitle': '加入使用 jzero 快速交付的开发者行列。',
        'cta.github': 'GitHub Star', 'cta.docs': '阅读文档',

        // Footer
        'footer.brand': '基于 go-zero 的 AI 友好 Go 微服务框架。',
        'footer.product': '产品', 'footer.resources': '资源', 'footer.community': '社区',
        'footer.framework': 'jzero 框架', 'footer.admin': 'jzero-admin', 'footer.plugin': 'JetBrains 插件', 'footer.examples': '示例',
        'footer.docs_link': '文档', 'footer.releases': '版本', 'footer.issues': '问题', 'footer.deepwiki': 'DeepWiki',
        'footer.github_org': 'GitHub', 'footer.star_history': 'Star 历史', 'footer.contributing': '贡献',
        'footer.copyright': '© 2024-2026 jzero-io. MIT 许可证。'
    }
};

// 语言显示名称
const languageNames = {
    en: 'EN',
    zh: '中文'
};

// 设置语言
function setLanguage(lang) {
    localStorage.setItem('jzero-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang]?.[key]) {
            // 如果有 .btn-text 子元素，只替换文本部分
            const btnText = el.querySelector('.btn-text');
            if (btnText) {
                btnText.textContent = translations[lang][key];
            } else if (el.hasAttribute('data-i18n-html')) {
                // 支持 HTML 内容
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // 更新当前语言显示
    const currentLangEl = document.querySelector('.current-lang');
    if (currentLangEl) {
        currentLangEl.textContent = languageNames[lang];
    }

    // 更新语言选项的选中状态
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.toggle('selected', option.dataset.lang === lang);
    });

    // 根据 language 更新 jzero-admin 链接
    const adminLink = document.getElementById('jzero-admin-link');
    if (adminLink) {
        // 中文使用国内链接，其他使用国外链接
        adminLink.href = lang === 'zh' ? 'https://jzero-admin.jaronnie.com' : 'https://admin.jzero.io';
    }

    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

// 初始化语言
function initLanguage() {
    const saved = localStorage.getItem('jzero-lang');
    const browser = navigator.language.startsWith('zh') ? 'zh' : 'en';
    const lang = saved || 'en'; // 默认英文

    // 先设置链接，避免跳转问题
    const adminLink = document.getElementById('jzero-admin-link');
    if (adminLink) {
        adminLink.href = lang === 'zh' ? 'https://jzero-admin.jaronnie.com' : 'https://admin.jzero.io';
    }

    setLanguage(lang);
}

// 初始化下拉框
function initDropdown() {
    const dropdownBtn = document.getElementById('langDropdownBtn');
    const dropdownMenu = document.getElementById('langDropdownMenu');

    if (!dropdownBtn || !dropdownMenu) return;

    // 切换下拉菜单
    dropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownBtn.classList.toggle('active');
        dropdownMenu.classList.toggle('show');
    });

    // 选择语言
    dropdownMenu.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = option.dataset.lang;
            setLanguage(lang);
            closeDropdown();
        });
    });

    // 点击外部关闭
    document.addEventListener('click', () => {
        closeDropdown();
    });

    // ESC 键关闭
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDropdown();
        }
    });
}

function closeDropdown() {
    const dropdownBtn = document.getElementById('langDropdownBtn');
    const dropdownMenu = document.getElementById('langDropdownMenu');
    if (dropdownBtn) dropdownBtn.classList.remove('active');
    if (dropdownMenu) dropdownMenu.classList.remove('show');
}

// 绑定事件
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initDropdown();
});
