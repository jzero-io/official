


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
        'hero.subtitle': 'Auto-generate server and client code from api/proto/sql definitions. Let AI generate best-practice business logic with jzero-skills, reduce cognitive load, focus on what matters.',
        'hero.cta.github': 'Star on GitHub',
        'hero.cta.docs': 'Read the Docs',
        'hero.code.desc': 'One-Click Install jzero',
        'hero.code.title': 'Terminal',
        'hero.code.comment1': '# ✓ API server running on :8001',
        'hero.code.comment2': '# ✓ Swagger UI available at /swagger',

        // Trusted
        'trusted.label': 'Trusted by developers building modern microservices',
        'trusted.logo1': 'Production Ready',
        'trusted.logo2': 'Enterprise Scale',
        'trusted.logo3': 'Cloud Native',
        'trusted.logo4': 'AI Enhanced',

        // Features
        'features.title': 'Built for modern development',
        'features.subtitle': 'Everything you need to build scalable microservices in Go, without the complexity.',
        'features.1.title': 'Framework Code Generation',
        'features.1.desc': 'Generate production-ready server and client code from API, Proto, and SQL definitions. Solid foundation for your applications.',
        'features.2.title': 'Business Logic Auto-Generation',
        'features.2.desc': 'Built-in jzero-skills enables AI to generate best-practice business logic. Lower cognitive load, ship faster, focus on what matters.',
        'features.3.title': 'Flexible Configuration',
        'features.3.desc': 'Control jzero with config files, CLI args, or environment variables. Mix and match to fit your workflow. Simple by default, powerful when needed.',
        'features.4.title': 'Multiple Generation Strategies',
        'features.4.desc': 'Flexible code generation strategies including full regeneration and git-change based incremental updates. Adapt to your project needs.',
        'features.5.title': 'Custom Templates',
        'features.5.desc': 'Built-in templates follow best practices. Create custom templates for your enterprise needs. Consistent code across your team, every time.',
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
        'eco.1.title': 'jzero-admin', 'eco.1.desc': 'Next-generation admin system with jzero backend.', 'eco.1.link': 'Live Demo →',
        'eco.2.title': 'jzero-intellij', 'eco.2.desc': 'JetBrains/GoLand plugin for seamless IDE integration.', 'eco.2.link': 'View Plugin →',
        'eco.3.title': 'Examples', 'eco.3.desc': 'Example projects demonstrating jzero best practices.', 'eco.3.link': 'Browse Examples →',

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
        'hero.subtitle': '基于 api/proto/sql 自动生成服务端与客户端代码，内置 jzero-skills，让 AI 生成符合最佳实践的业务逻辑，降低开发心智负担，专注核心业务。',
        'hero.cta.github': 'GitHub Star',
        'hero.cta.docs': '阅读文档',
        'hero.code.desc': '一键安装 jzero',
        'hero.code.title': '终端',
        'hero.code.comment1': '# ✓ API 服务运行在 :8001',
        'hero.code.comment2': '# ✓ Swagger UI 访问 /swagger',

        // Trusted
        'trusted.label': '受开发者信赖，构建现代微服务的首选',
        'trusted.logo1': '生产就绪',
        'trusted.logo2': '企业级规模',
        'trusted.logo3': '云原生',
        'trusted.logo4': 'AI 增强',

        // Features
        'features.title': '为现代开发而构建',
        'features.subtitle': '构建可扩展 Go 微服务所需的一切，无需复杂配置。',
        'features.1.title': '基础框架代码生成',
        'features.1.desc': '从 API、Proto 和 SQL 定义生成生产级代码。为应用提供坚实框架基础。',
        'features.2.title': '业务逻辑代码自动生成',
        'features.2.desc': '内置 jzero-skills 让 AI 生成最佳实践业务逻辑。降低负担，快速交付。',
        'features.3.title': '灵活配置',
        'features.3.desc': '配置文件、命令行或环境变量自由组合。默认简单，需要时强大。',
        'features.4.title': '多种代码生成策略',
        'features.4.desc': '支持全量生成和基于 Git 差异的增量生成等多种策略。灵活适配项目需求。',
        'features.5.title': '自定义模板',
        'features.5.desc': '内置最佳实践模板。创建企业定制模板，团队代码始终保持一致。',
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
        'eco.1.title': 'jzero-admin', 'eco.1.desc': '基于 jzero 后端的下一代管理系统。', 'eco.1.link': '在线演示 →',
        'eco.2.title': 'jzero-intellij', 'eco.2.desc': 'JetBrains/GoLand 插件，IDE 无缝集成。', 'eco.2.link': '查看插件 →',
        'eco.3.title': '示例项目', 'eco.3.desc': '展示 jzero 最佳实践的示例集合。', 'eco.3.link': '浏览示例 →',

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

    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

// 初始化语言
function initLanguage() {
    const saved = localStorage.getItem('jzero-lang');
    const browser = navigator.language.startsWith('zh') ? 'zh' : 'en';
    setLanguage(saved || browser);
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
