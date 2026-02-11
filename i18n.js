// 国际化翻译配置
const translations = {
    en: {
        // Navigation
        'nav.features': 'Features',
        'nav.ecosystem': 'Ecosystem',
        'nav.documentation': 'Documentation',

        // Hero
        'hero.title': 'Build Go microservices',
        'hero.title.gradient': 'at lightspeed',
        'hero.subtitle': 'jzero is the AI-friendly, developer-centric framework built on go-zero. Generate production-ready API, Gateway, and RPC services from simple definitions. Stop writing boilerplate, start shipping features.',
        'hero.cta.github': 'Star on GitHub',
        'hero.cta.docs': 'Read the Docs',
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
        'features.1.title': 'Lightning Fast Code Generation',
        'features.1.desc': 'Generate production-ready server and client code from API, Proto, and SQL definitions. What takes hours manually takes seconds with jzero.',
        'features.2.title': 'AI-Friendly Architecture',
        'features.2.desc': 'Built-in jzero-skills enables AI to generate best-practice business logic. Lower cognitive load, ship faster, focus on what matters.',
        'features.3.title': 'Flexible Configuration',
        'features.3.desc': 'Control jzero with config files, CLI args, or environment variables. Mix and match to fit your workflow. Simple by default, powerful when needed.',
        'features.4.title': 'Git-Change Based Generation',
        'features.4.desc': 'Generate code only for changed files in your git repo. Incremental updates for large projects, saving time and reducing errors.',
        'features.5.title': 'Custom Templates',
        'features.5.desc': 'Built-in templates follow best practices. Create custom templates for your enterprise needs. Consistent code across your team, every time.',
        'features.6.title': 'Full-Stack Microservices',
        'features.6.desc': 'Generate API services, Gateways with service discovery, and RPC services. One framework for all your microservice needs.',

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
        'ecosystem.title': 'A complete ecosystem',
        'ecosystem.subtitle': 'Everything you need to build, deploy, and manage your microservices.',
        'eco.1.title': 'jzero', 'eco.1.desc': 'Core framework for generating API, Gateway, and RPC services.', 'eco.1.link': 'View on GitHub →',
        'eco.2.title': 'jzero-admin', 'eco.2.desc': 'Next-generation admin system with jzero backend.', 'eco.2.link': 'Live Demo →',
        'eco.3.title': 'jzero-intellij', 'eco.3.desc': 'JetBrains/GoLand plugin for seamless IDE integration.', 'eco.3.link': 'View Plugin →',
        'eco.4.title': 'Examples', 'eco.4.desc': 'Example projects demonstrating jzero best practices.', 'eco.4.link': 'Browse Examples →',

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
        'hero.title': '模板以及AI驱动的Go开发框架',
        'hero.title.gradient': '高效可靠',
        'hero.subtitle': 'jzero 是基于 go-zero 构建的 AI 友好框架。从简单定义生成生产级 API、网关和 RPC 服务。专注核心业务，告别样板代码。',
        'hero.cta.github': 'GitHub Star',
        'hero.cta.docs': '阅读文档',
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
        'features.1.title': '极速代码生成',
        'features.1.desc': '从 API、Proto 和 SQL 定义生成生产级代码。手动数小时，jzero 只需几秒。',
        'features.2.title': 'AI 友好架构',
        'features.2.desc': '内置 jzero-skills 让 AI 生成最佳实践业务逻辑。降低负担，快速交付。',
        'features.3.title': '灵活配置',
        'features.3.desc': '配置文件、命令行或环境变量自由组合。默认简单，需要时强大。',
        'features.4.title': '基于 Git 增量生成',
        'features.4.desc': '仅为 git 变更文件生成代码。大型项目增量更新，省时减少错误。',
        'features.5.title': '自定义模板',
        'features.5.desc': '内置最佳实践模板。创建企业定制模板，团队代码始终保持一致。',
        'features.6.title': '全栈微服务',
        'features.6.desc': '生成 API、服务发现网关和 RPC 服务。一个框架满足所有需求。',

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
        'ecosystem.title': '完整生态系统',
        'ecosystem.subtitle': '构建、部署和管理微服务所需的一切。',
        'eco.1.title': 'jzero', 'eco.1.desc': '核心框架，从定义生成 API、网关和 RPC 服务。', 'eco.1.link': '查看 GitHub →',
        'eco.2.title': 'jzero-admin', 'eco.2.desc': '基于 jzero 后端的下一代管理系统。', 'eco.2.link': '在线演示 →',
        'eco.3.title': 'jzero-intellij', 'eco.3.desc': 'JetBrains/GoLand 插件，IDE 无缝集成。', 'eco.3.link': '查看插件 →',
        'eco.4.title': '示例项目', 'eco.4.desc': '展示 jzero 最佳实践的示例集合。', 'eco.4.link': '浏览示例 →',

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
