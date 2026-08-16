const localLogo = (filename) => `./img/${filename}`;

export const ENGINE_GROUPS = [
  { id: 'web', labelKey: 'groupWeb' },
  { id: 'specialized', labelKey: 'groupSpecialized' },
  { id: 'ai', labelKey: 'groupAi' }
];

export const ENGINES = [
  {
    id: 'google', name: 'Google', category: 'web', logo: localLogo('google_logo.png'),
    searchUrl: 'https://www.google.com/search?q=%s', luckyUrl: 'https://www.google.com/search?btnI=I&q=%s',
    accent: '#4285f4', profile: 'search', aliases: ['g', 'google'], bangs: ['g'], descriptionKey: 'engineGoogle'
  },
  {
    id: 'google-ai', name: 'Google AI Mode', category: 'ai', logo: localLogo('google_logo.png'),
    searchUrl: 'https://www.google.com/search?udm=50&q=%s', accent: '#4285f4', profile: 'assistant', mode: 'ai-search',
    aliases: ['google-ai', 'ai', 'gm'], bangs: ['ai', 'gm'], descriptionKey: 'engineGoogleAi'
  },
  {
    id: 'bing', name: 'Bing', category: 'web', logo: localLogo('bing_logo.png'),
    searchUrl: 'https://www.bing.com/search?q=%s', accent: '#007daa', profile: 'search', noInvert: true,
    aliases: ['bing'], bangs: ['b'], descriptionKey: 'engineBing'
  },
  {
    id: 'baidu', name: 'Baidu', category: 'web', logo: localLogo('baidu_logo.png'),
    searchUrl: 'https://www.baidu.com/s?wd=%s', accent: '#3245f0', profile: 'search', noInvert: true,
    aliases: ['baidu', 'bd'], bangs: ['bd'], descriptionKey: 'engineBaidu'
  },
  {
    id: 'yandex', name: 'Yandex', category: 'web', logo: localLogo('yandex_logo.png'),
    searchUrl: 'https://yandex.com/search/?text=%s', accent: '#ff0000', profile: 'search',
    aliases: ['yandex', 'ya'], bangs: ['ya'], descriptionKey: 'engineYandex'
  },
  {
    id: 'yahoo', name: 'Yahoo', category: 'web', logo: localLogo('yahoo_logo.png'),
    searchUrl: 'https://search.yahoo.com/search?p=%s', accent: '#6001d2', profile: 'search',
    aliases: ['yahoo'], bangs: ['y'], descriptionKey: 'engineYahoo'
  },
  {
    id: 'sogou', name: 'Sogou', category: 'web', logo: localLogo('sogou_logo.png'),
    searchUrl: 'https://www.sogou.com/web?query=%s', accent: '#ff6900', profile: 'search',
    aliases: ['sogou', 'sg'], bangs: ['sg'], descriptionKey: 'engineSogou'
  },
  {
    id: '360', name: '360', category: 'web', logo: localLogo('360search_logo.png'),
    searchUrl: 'https://www.so.com/s?q=%s', accent: '#19b955', profile: 'search',
    aliases: ['360', 'so360'], bangs: ['360'], descriptionKey: 'engine360'
  },
  {
    id: 'duckduckgo', name: 'DuckDuckGo', category: 'web', logo: localLogo('duckduckgo_logo.png'),
    searchUrl: 'https://duckduckgo.com/?q=%s', accent: '#de5833', profile: 'search', noInvert: true,
    aliases: ['duckduckgo', 'ddg'], bangs: ['ddg'], descriptionKey: 'engineDuckDuckGo'
  },
  {
    id: 'brave', name: 'Brave Search', category: 'web', logo: localLogo('brave_logo.png'),
    searchUrl: 'https://search.brave.com/search?q=%s', accent: '#ff5722', profile: 'search', noInvert: true,
    aliases: ['brave'], bangs: ['brave'], descriptionKey: 'engineBrave'
  },
  {
    id: 'chatgpt', name: 'ChatGPT', category: 'ai', logo: localLogo('chatgpt_logo.png'),
    searchUrl: 'https://chatgpt.com/', accent: '#10a37f', profile: 'assistant', mode: 'prompt', promptBased: true,
    aliases: ['chatgpt', 'gpt'], bangs: ['gpt'], descriptionKey: 'engineChatGPT'
  },
  {
    id: 'xiaoyi', name: 'Celia', category: 'ai', logo: localLogo('xiaoyi_logo.png'),
    searchUrl: 'https://xiaoyi.huawei.com/?q=%s', accent: '#1a72e9', profile: 'assistant', noInvert: true,
    aliases: ['celia', 'xiaoyi'], bangs: ['celia'], descriptionKey: 'engineCelia'
  },
  {
    id: 'quark', name: 'Quark', category: 'web', logo: localLogo('quark_logo.png'),
    searchUrl: 'https://ai.quark.cn/s?q=%s', accent: '#17c465', profile: 'search', noInvert: true,
    aliases: ['quark'], bangs: ['quark'], descriptionKey: 'engineQuark'
  },
  {
    id: 'perplexity', name: 'Perplexity', category: 'ai', logo: localLogo('perplexity_logo.png'),
    searchUrl: 'https://www.perplexity.ai/search/?q=%s', accent: '#111111', profile: 'assistant', noInvert: true,
    aliases: ['perplexity', 'pplx'], bangs: ['pplx'], descriptionKey: 'enginePerplexity'
  },
  {
    id: 'youtube', name: 'YouTube', category: 'specialized', logo: localLogo('youtube_logo.png'), searchUrl: 'https://www.youtube.com/results?search_query=%s',
    accent: '#ff0033', profile: 'minimal', noInvert: true, aliases: ['youtube', 'yt'], bangs: ['yt'], descriptionKey: 'engineYouTube'
  },
  {
    id: 'scholar', name: 'Google Scholar', category: 'specialized', logo: localLogo('scholar_logo.png'), searchUrl: 'https://scholar.google.com/scholar?q=%s',
    accent: '#4285f4', profile: 'minimal', noInvert: true, aliases: ['scholar'], bangs: ['scholar'], descriptionKey: 'engineScholar'
  },
  {
    id: 'images', name: 'Google Images', category: 'specialized', logo: localLogo('google_images_logo.png'), searchUrl: 'https://www.google.com/search?tbm=isch&q=%s',
    accent: '#ea4335', profile: 'minimal', noInvert: true, aliases: ['images', 'img'], bangs: ['img'], descriptionKey: 'engineImages'
  },
  {
    id: 'wikipedia', name: 'Wikipedia', category: 'specialized', logo: localLogo('wikipedia_logo.png'), searchUrl: 'https://en.wikipedia.org/w/index.php?search=%s',
    accent: '#54595d', profile: 'minimal', noInvert: true, aliases: ['wikipedia', 'wiki'], bangs: ['wiki'], descriptionKey: 'engineWikipedia'
  },
  {
    id: 'github', name: 'GitHub', category: 'specialized', logo: localLogo('github_logo.png'), searchUrl: 'https://github.com/search?q=%s&type=repositories',
    accent: '#24292f', profile: 'minimal', noInvert: true, aliases: ['github', 'gh'], bangs: ['gh'], descriptionKey: 'engineGitHub'
  },
  {
    id: 'stackoverflow', name: 'Stack Overflow', category: 'specialized', logo: localLogo('stackoverflow_logo.png'), searchUrl: 'https://stackoverflow.com/search?q=%s',
    accent: '#f48024', profile: 'minimal', noInvert: true, aliases: ['stackoverflow', 'so'], bangs: ['sof'], descriptionKey: 'engineStackOverflow'
  },
  {
    id: 'arxiv', name: 'arXiv', category: 'specialized', logo: localLogo('arxiv_logo.png'), searchUrl: 'https://arxiv.org/search/?query=%s&searchtype=all',
    accent: '#b31b1b', profile: 'minimal', noInvert: true, aliases: ['arxiv'], bangs: ['arxiv'], descriptionKey: 'engineArxiv'
  },
  {
    id: 'pubmed', name: 'PubMed', category: 'specialized', logo: localLogo('pubmed_logo.png'), searchUrl: 'https://pubmed.ncbi.nlm.nih.gov/?term=%s',
    accent: '#326599', profile: 'minimal', noInvert: true, aliases: ['pubmed', 'pm'], bangs: ['pm'], descriptionKey: 'enginePubMed'
  },
  {
    id: 'claude', name: 'Claude', category: 'ai', logo: localLogo('claude_logo.png'), searchUrl: 'https://claude.ai/new',
    accent: '#d97757', profile: 'assistant', noInvert: true, aliases: ['claude'], bangs: ['claude'], descriptionKey: 'engineClaude', mode: 'prompt', promptBased: true
  },
  {
    id: 'grok', name: 'Grok', category: 'ai', logo: localLogo('grok_logo.png'), searchUrl: 'https://grok.com/?q=%s',
    accent: '#111111', profile: 'assistant', noInvert: true, aliases: ['grok'], bangs: ['grok'], descriptionKey: 'engineGrok', mode: 'ai-search'
  },
  {
    id: 'deepseek', name: 'DeepSeek', category: 'ai', logo: localLogo('deepseek_logo.png'), searchUrl: 'https://chat.deepseek.com/',
    accent: '#4d6bfe', profile: 'assistant', noInvert: true, aliases: ['deepseek', 'ds'], bangs: ['ds'], descriptionKey: 'engineDeepSeek', mode: 'prompt', promptBased: true
  },
  {
    id: 'qwen', name: 'Qwen', category: 'ai', logo: localLogo('qwen_logo.png'), searchUrl: 'https://chat.qwen.ai/',
    accent: '#615ced', profile: 'assistant', noInvert: true, aliases: ['qwen'], bangs: ['qwen'], descriptionKey: 'engineQwen', mode: 'prompt', promptBased: true
  },
  {
    id: 'doubao', name: '豆包', category: 'ai', logo: localLogo('doubao_logo.png'), searchUrl: 'https://www.doubao.com/chat/',
    accent: '#4169e1', profile: 'assistant', noInvert: true, aliases: ['doubao'], bangs: ['doubao'], descriptionKey: 'engineDoubao', mode: 'prompt', promptBased: true
  },
  {
    id: 'chat-baidu', name: 'Chat Baidu', category: 'ai', logo: localLogo('baidu_logo.png'), searchUrl: 'https://chat.baidu.com/search?word=%s',
    accent: '#3245f0', profile: 'assistant', noInvert: true, aliases: ['chat-baidu', 'cbd'], bangs: ['cbd'], mode: 'ai-search'
  },
  {
    id: 'ernie', name: 'ERNIE', category: 'ai', logo: localLogo('baidu_logo.png'), searchUrl: 'https://ernie.baidu.com/',
    accent: '#3245f0', profile: 'assistant', noInvert: true, aliases: ['ernie', 'baidu-ai'], bangs: ['ernie'], mode: 'prompt', promptBased: true
  },
  {
    id: 'duck-ai', name: 'Duck.ai', category: 'ai', logo: localLogo('duckduckgo_logo.png'), searchUrl: 'https://duck.ai/chat?q=%s',
    accent: '#de5833', profile: 'assistant', noInvert: true, aliases: ['duck-ai', 'duckai'], bangs: ['duckai'], mode: 'ai-search'
  },
  {
    id: 'copilot', name: 'Copilot', category: 'ai', logo: localLogo('copilot_logo.png'),
    searchUrl: 'https://copilot.microsoft.com/', accent: '#00b6ff', profile: 'assistant', noInvert: true, mode: 'prompt', promptBased: true,
    aliases: ['copilot'], bangs: ['copilot'], descriptionKey: 'engineCopilot'
  },
  {
    id: 'gemini', name: 'Gemini', category: 'ai', logo: localLogo('gemini_logo.png'), searchUrl: 'https://gemini.google.com/app',
    accent: '#8e75ff', profile: 'assistant', noInvert: true, aliases: ['gemini'], bangs: ['gemini'], descriptionKey: 'engineGemini', mode: 'prompt', promptBased: true
  },
  {
    id: 'you', name: 'You.com', category: 'ai', logo: localLogo('youcom.png'),
    searchUrl: 'https://you.com/search?q=%s', accent: '#0066ff', profile: 'assistant', noInvert: true,
    aliases: ['you', 'youcom'], bangs: ['you'], descriptionKey: 'engineYou'
  },
  {
    id: 'google-advanced', name: 'Google Advanced', category: 'web', logo: localLogo('google_logo.png'), searchUrl: 'https://www.google.com/advanced_search?q=%s',
    accent: '#4285f4', profile: 'search', noInvert: true, aliases: ['google-advanced', 'gplus'], bangs: ['gplus']
  },
  {
    id: 'baidu-baike', name: 'Baidu Baike', category: 'web', logo: localLogo('baidu_logo.png'), searchUrl: 'https://baike.baidu.com/search/word?word=%s',
    accent: '#3245f0', profile: 'search', noInvert: true, aliases: ['baike', 'bdbk'], bangs: ['baike']
  },
  {
    id: 'grokipedia', name: 'Grokipedia', category: 'web', logo: localLogo('grokipedia_logo.png'), searchUrl: 'https://grokipedia.com/search?q=%s',
    accent: '#111111', profile: 'search', noInvert: true, aliases: ['grokipedia'], bangs: ['grokipedia']
  },
  {
    id: 'wikiwand', name: 'Wikiwand', category: 'web', logo: localLogo('wikiwand_logo.png'), searchUrl: 'https://www.wikiwand.com/en/search?q=%s',
    accent: '#3e63dd', profile: 'search', noInvert: true, aliases: ['wikiwand'], bangs: ['wikiwand']
  },
  {
    id: 'google-patents', name: 'Google Patents', category: 'specialized', logo: localLogo('patents_logo.png'), searchUrl: 'https://patents.google.com/?q=%s',
    accent: '#4285f4', profile: 'minimal', noInvert: true, aliases: ['patents', 'gpat'], bangs: ['gpat']
  },
  {
    id: 'these-2', name: 'These2.0', category: 'specialized', logo: localLogo('these2_logo.png'), searchUrl: 'https://thesefmpm.vercel.app/search?page=1&search=%s',
    accent: '#5b6472', profile: 'minimal', noInvert: true, aliases: ['these2', 'these'], bangs: ['these2']
  },
  {
    id: 'cismef-theses', name: 'CISMeF Thèses', category: 'specialized', logo: localLogo('mesh_logo.png'), searchUrl: 'https://doccismef.chu-rouen.fr/dc/#env=thm&q=%s',
    accent: '#1677a8', profile: 'minimal', noInvert: true, aliases: ['cismef-theses', 'cismef-th'], bangs: ['cismef-th']
  },
  {
    id: 'toubkal', name: 'Toubkal', category: 'specialized', logo: localLogo('toubkal_logo.png'), searchUrl: 'https://toubkal.imist.ma/search?query=%s',
    accent: '#8d3d1f', profile: 'minimal', noInvert: true, aliases: ['toubkal'], bangs: ['toubkal']
  },
  {
    id: 'theses-fr', name: 'Theses.fr', category: 'specialized', logo: localLogo('thesesfr_logo.png'), searchUrl: 'https://theses.fr/resultats?q=%s',
    accent: '#31558a', profile: 'minimal', noInvert: true, aliases: ['theses-fr', 'thesesfr'], bangs: ['thesesfr']
  },
  {
    id: 'researchgate', name: 'ResearchGate', category: 'specialized', logo: localLogo('researchgate_logo.png'), searchUrl: 'https://www.researchgate.net/search/publication?q=%s',
    accent: '#00a0c6', profile: 'minimal', noInvert: true, aliases: ['researchgate', 'rgate'], bangs: ['rgate']
  },
  {
    id: 'ndltd', name: 'NDLTD', category: 'specialized', logo: localLogo('scholar_logo.png'), searchUrl: 'https://search.ndltd.org/search.php?q=%s',
    accent: '#6b4fbb', profile: 'minimal', noInvert: true, aliases: ['ndltd'], bangs: ['ndltd']
  },
  {
    id: 'baidu-scholar', name: 'Baidu Scholar', category: 'specialized', logo: localLogo('baidu_logo.png'), searchUrl: 'https://xueshu.baidu.com/ndscholar/browse/search?wd=%s',
    accent: '#3245f0', profile: 'minimal', noInvert: true, aliases: ['baidu-scholar', 'xueshu'], bangs: ['xueshu']
  },
  {
    id: 'cyberleninka', name: 'CyberLeninka', category: 'specialized', logo: localLogo('cyberleninka_logo.png'), searchUrl: 'https://cyberleninka.ru/search?q=%s',
    accent: '#e25a2c', profile: 'minimal', noInvert: true, aliases: ['cyberleninka', 'cyber'], bangs: ['cyber']
  },
  {
    id: 'pro-inserm', name: 'Pro Inserm', category: 'specialized', logo: localLogo('pubmed_logo.png'), searchUrl: 'https://pro.inserm.fr/?s=%s',
    accent: '#326599', profile: 'minimal', noInvert: true, aliases: ['pro-inserm', 'proinserm'], bangs: ['proinserm']
  },
  {
    id: 'cismef', name: 'CISMeF', category: 'specialized', logo: localLogo('mesh_logo.png'), searchUrl: 'https://doccismef.chu-rouen.fr/dc/#env=all&q=%s',
    accent: '#1677a8', profile: 'minimal', noInvert: true, aliases: ['cismef'], bangs: ['cismef']
  },
  {
    id: 'morocco-health', name: 'Morocco Health Ministry', category: 'specialized', logo: localLogo('cdc_logo.png'), searchUrl: 'https://www.sante.gov.ma/SearchCenter/Pages/results.aspx?k=%s',
    accent: '#167c5a', profile: 'minimal', noInvert: true, aliases: ['morocco-health', 'msps'], bangs: ['msps']
  },
  {
    id: 'ammps-medicines', name: 'AMMPS Medicines', category: 'specialized', logo: localLogo('ammps_logo.png'), searchUrl: 'https://ammps.gov.ma/recherche-medicaments?search=%s',
    accent: '#0f7c79', profile: 'minimal', noInvert: true, aliases: ['ammps-medicines', 'ammps'], bangs: ['ammps']
  },
  {
    id: 'ammps-list', name: 'AMMPS Drug List', category: 'specialized', logo: localLogo('ammps_logo.png'), searchUrl: 'https://ammps.gov.ma/basesdedonnes/listes-medicaments?search=%s',
    accent: '#0f7c79', profile: 'minimal', noInvert: true, aliases: ['ammps-list'], bangs: ['ammps-list']
  },
  {
    id: 'ammps-rmmg', name: 'AMMPS RMMG', category: 'specialized', logo: localLogo('ammps_logo.png'), searchUrl: 'https://www.google.com/search?q=site%3Aammps.gov.ma%2Fcallpages%2FRMMG%20%s',
    accent: '#0f7c79', profile: 'minimal', noInvert: true, aliases: ['ammps-rmmg'], bangs: ['ammps-rmmg']
  },
  {
    id: 'ammps-vaccines', name: 'AMMPS Vaccines', category: 'specialized', logo: localLogo('ammps_logo.png'), searchUrl: 'https://ammps.gov.ma/basesdedonnes/liste-vaccin-libere?search=%s',
    accent: '#0f7c79', profile: 'minimal', noInvert: true, aliases: ['ammps-vaccines'], bangs: ['ammps-vaccines']
  },
  {
    id: 'ammps-pharmacies', name: 'AMMPS Pharmacies', category: 'specialized', logo: localLogo('ammps_logo.png'), searchUrl: 'https://ammps.gov.ma/basesdedonnes/pharmacies?search=%s',
    accent: '#0f7c79', profile: 'minimal', noInvert: true, aliases: ['ammps-pharmacies'], bangs: ['ammps-pharmacies']
  },
  {
    id: 'ammps-site', name: 'AMMPS Site', category: 'specialized', logo: localLogo('ammps_logo.png'), searchUrl: 'https://www.google.com/search?q=site%3Aammps.gov.ma%20%s',
    accent: '#0f7c79', profile: 'minimal', noInvert: true, aliases: ['ammps-site'], bangs: ['ammps-site']
  },
  {
    id: 'has-health', name: 'HAS', category: 'specialized', logo: localLogo('has_logo.png'), searchUrl: 'https://www.has-sante.fr/jcms/fc_2875171/fr/resultat-de-recherche?text=%s',
    accent: '#156e9d', profile: 'minimal', noInvert: true, aliases: ['has-health', 'has'], bangs: ['has']
  },
  {
    id: 'vidal', name: 'VIDAL', category: 'specialized', logo: localLogo('vidal_logo.png'), searchUrl: 'https://www.vidal.fr/recherche.html?query=%s',
    accent: '#1d8bd1', profile: 'minimal', noInvert: true, aliases: ['vidal'], bangs: ['vidal']
  },
  {
    id: 'cismef-guidelines', name: 'CISMeF Guidelines', category: 'specialized', logo: localLogo('mesh_logo.png'), searchUrl: 'https://doccismef.chu-rouen.fr/dc/#env=bp&q=%s',
    accent: '#1677a8', profile: 'minimal', noInvert: true, aliases: ['cismef-guidelines', 'cismef-bp'], bangs: ['cismef-bp']
  },
  {
    id: 'cismef-education', name: 'CISMeF Education', category: 'specialized', logo: localLogo('mesh_logo.png'), searchUrl: 'https://doccismef.chu-rouen.fr/dc/#env=unf3s&q=%s',
    accent: '#1677a8', profile: 'minimal', noInvert: true, aliases: ['cismef-education', 'cismef-edu'], bangs: ['cismef-edu']
  },
  {
    id: 'cismef-ecn', name: 'CISMeF ECN', category: 'specialized', logo: localLogo('mesh_logo.png'), searchUrl: 'https://doccismef.chu-rouen.fr/dc/#env=ecn&q=%s',
    accent: '#1677a8', profile: 'minimal', noInvert: true, aliases: ['cismef-ecn'], bangs: ['cismef-ecn']
  },
  {
    id: 'cismef-patients', name: 'CISMeF Patients', category: 'specialized', logo: localLogo('mesh_logo.png'), searchUrl: 'https://doccismef.chu-rouen.fr/dc/#env=pat&q=%s',
    accent: '#1677a8', profile: 'minimal', noInvert: true, aliases: ['cismef-patients', 'cismef-pat'], bangs: ['cismef-pat']
  },
  {
    id: 'lissa', name: 'LISSA', category: 'specialized', logo: localLogo('mesh_logo.png'), searchUrl: 'https://www.lissa.fr/dc/#env=lissa&q=%s',
    accent: '#1e74a9', profile: 'minimal', noInvert: true, aliases: ['lissa'], bangs: ['lissa']
  },
  {
    id: 'hetop', name: 'HETOP', category: 'specialized', logo: localLogo('mesh_logo.png'), searchUrl: 'https://www.hetop.eu/hetop/fr/#oti=all&q=%s',
    accent: '#445b94', profile: 'minimal', noInvert: true, aliases: ['hetop'], bangs: ['hetop']
  },
  {
    id: 'nejm', name: 'NEJM', category: 'specialized', logo: localLogo('nejm_logo.png'), searchUrl: 'https://www.nejm.org/search?q=%s',
    accent: '#b62232', profile: 'minimal', noInvert: true, aliases: ['nejm'], bangs: ['nejm']
  },
  {
    id: 'radiopaedia', name: 'Radiopaedia', category: 'specialized', logo: localLogo('radiopaedia_logo.png'), searchUrl: 'https://radiopaedia.org/search?q=%s',
    accent: '#c32d45', profile: 'minimal', noInvert: true, aliases: ['radiopaedia', 'radio'], bangs: ['radio']
  },
  {
    id: 'uptodate', name: 'UpToDate', category: 'specialized', logo: localLogo('uptodate_logo.png'), searchUrl: 'https://www.uptodate.com/contents/search?search=%s',
    accent: '#7b3f98', profile: 'minimal', noInvert: true, aliases: ['uptodate', 'utd'], bangs: ['utd']
  },
  {
    id: 'cochrane', name: 'Cochrane Library', category: 'specialized', logo: localLogo('cochrane_logo.png'), searchUrl: 'https://www.cochranelibrary.com/search?q=%s',
    accent: '#0067b1', profile: 'minimal', noInvert: true, aliases: ['cochrane', 'coch'], bangs: ['coch']
  },
  {
    id: 'medscape', name: 'Medscape', category: 'specialized', logo: localLogo('medscape_logo.png'), searchUrl: 'https://search.medscape.com/search/?q=%s',
    accent: '#007c94', profile: 'minimal', noInvert: true, aliases: ['medscape'], bangs: ['medscape']
  },
  {
    id: 'openmd', name: 'OpenMD', category: 'specialized', logo: localLogo('openmd_logo.png'), searchUrl: 'https://openmd.com/search?q=%s',
    accent: '#315c7a', profile: 'minimal', noInvert: true, aliases: ['openmd'], bangs: ['openmd']
  },
  {
    id: 'mesh', name: 'MeSH Browser', category: 'specialized', logo: localLogo('mesh_logo.png'), searchUrl: 'https://meshb.nlm.nih.gov/search?searchInField=allTerms&searchString=%s',
    accent: '#326599', profile: 'minimal', noInvert: true, aliases: ['mesh'], bangs: ['mesh']
  },
  {
    id: 'webmd', name: 'WebMD', category: 'specialized', logo: localLogo('webmd_logo.png'), searchUrl: 'https://www.webmd.com/search?query=%s',
    accent: '#1a75bc', profile: 'minimal', noInvert: true, aliases: ['webmd'], bangs: ['webmd']
  },
  {
    id: 'nih', name: 'NIH', category: 'specialized', logo: localLogo('pubmed_logo.png'), searchUrl: 'https://search.usa.gov/search?affiliate=nih&query=%s',
    accent: '#1b4e80', profile: 'minimal', noInvert: true, aliases: ['nih'], bangs: ['nih']
  },
  {
    id: 'drugs', name: 'Drugs.com', category: 'specialized', logo: localLogo('drugs_logo.png'), searchUrl: 'https://www.drugs.com/search.php?searchterm=%s',
    accent: '#2d75b2', profile: 'minimal', noInvert: true, aliases: ['drugs'], bangs: ['drugs']
  },
  {
    id: 'cdc', name: 'CDC', category: 'specialized', logo: localLogo('cdc_logo.png'), searchUrl: 'https://search.cdc.gov/search/?query=%s',
    accent: '#005b8f', profile: 'minimal', noInvert: true, aliases: ['cdc'], bangs: ['cdc']
  },
  {
    id: 'wolfram-alpha', name: 'Wolfram Alpha', category: 'specialized', logo: localLogo('wolframalpha_logo.png'), searchUrl: 'https://www.wolframalpha.com/input?i=%s',
    accent: '#d9291c', profile: 'minimal', noInvert: true, aliases: ['wolfram', 'wa'], bangs: ['wolfram']
  },
  {
    id: 'alphafold', name: 'AlphaFold', category: 'specialized', logo: localLogo('alphafold_logo.png'), searchUrl: 'https://alphafold.ebi.ac.uk/search/text/%s',
    accent: '#5077c8', profile: 'minimal', noInvert: true, aliases: ['alphafold'], bangs: ['alphafold']
  }
].map((engine) => ({
  ...engine,
  descriptionKey: engine.descriptionKey || `engine${engine.id.replace(/(^|-)\w/g, (part) => part.replace('-', '').toUpperCase())}`
}));

export const ENGINE_BY_ID = new Map(ENGINES.map((engine) => [engine.id, engine]));

export function getEngine(id) {
  return ENGINE_BY_ID.get(id) || ENGINE_BY_ID.get('google');
}

export function validateEngineRegistry() {
  const seen = new Map();
  const problems = [];
  for (const engine of ENGINES) {
    const hasUrlRoute = engine.searchUrl?.includes('%s');
    const hasFormRoute = engine.formSubmission?.action && engine.formSubmission?.fields && ['GET', 'POST'].includes((engine.formSubmission.method || 'POST').toUpperCase());
    if (!engine.id || !engine.name || (!engine.promptBased && !hasUrlRoute && !hasFormRoute)) problems.push(`Invalid engine definition: ${engine.id || engine.name}`);
    for (const key of new Set([engine.id, ...engine.aliases, ...engine.bangs.map((bang) => `!${bang}`)])) {
      const normalized = key.toLowerCase();
      if (seen.has(normalized)) problems.push(`Duplicate engine route: ${key}`);
      seen.set(normalized, engine.id);
    }
  }
  return problems;
}
