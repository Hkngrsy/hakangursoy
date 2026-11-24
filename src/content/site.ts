// Sitedeki tüm metinler burada. İçeriği değiştirmek için bu dosyayı düzenlemek yeterli.
// TODO işaretli alanlar taslak: gerçek bilgilerle değiştirilmeli.

export const site = {
  name: "Hakan Gürsoy",
  role: "Web Geliştirici",
  url: "https://hakangursoy.com",
  description:
    "İşletmeler için hızlı, modern ve satış odaklı web siteleri tasarlıyor ve geliştiriyorum.",
  email: "merhaba@hakangursoy.com", // TODO: gerçek iletişim adresi
  socials: [
    { label: "GitHub", href: "https://github.com/" }, // TODO
    { label: "LinkedIn", href: "https://www.linkedin.com/" }, // TODO
    { label: "Instagram", href: "https://www.instagram.com/" }, // TODO
  ],
} as const;

export const nav = [
  { label: "Projeler", href: "#projeler" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Hakkımda", href: "#hakkimda" },
  { label: "İletişim", href: "#iletisim" },
] as const;

export type Project = {
  title: string;
  category: string;
  summary: string;
  stack: string[];
  /** Kapak görseli (public/ altında). TODO: gerçek ekran görüntüsüyle değiştir. */
  image: string;
  href?: string;
};

// TODO: açıklamalar, teknolojiler ve linkler gerçek projelerle doldurulacak.
export const projects: Project[] = [
  {
    title: "Liya",
    image: "/projeler/liya.svg",
    category: "Kurumsal Site",
    summary: "Marka tanıtımı ve iletişim odaklı kurumsal web sitesi.",
    stack: ["Next.js", "Tailwind"],
  },
  {
    title: "Koz Durağı",
    image: "/projeler/koz-duragi.svg",
    category: "İşletme Sitesi",
    summary: "Menü, konum ve iletişim bilgilerini öne çıkaran işletme sitesi.",
    stack: ["HTML", "CSS", "JS"],
  },
  {
    title: "Murtifuon",
    image: "/projeler/murtifuon.svg",
    category: "Web Uygulaması",
    summary: "API ve veritabanı ile çalışan, yönetim paneli olan uygulama.",
    stack: ["Node.js", "SQL"],
  },
  {
    title: "Tactical",
    image: "/projeler/tactical.svg",
    category: "E-ticaret",
    summary: "Ürün vitrini ve katalog yapısına sahip e-ticaret tasarımı.",
    stack: ["Tasarım", "UI"],
  },
];

export type Service = {
  title: string;
  description: string;
  icon: "building" | "cart" | "layout" | "rocket" | "search" | "wrench";
};

export const services: Service[] = [
  {
    title: "Kurumsal Web Sitesi",
    description: "Firmanızı doğru anlatan, güven veren ve kolay güncellenen siteler.",
    icon: "building",
  },
  {
    title: "E-ticaret",
    description: "Ürün, sepet ve ödeme altyapısıyla satışa hazır online mağazalar.",
    icon: "cart",
  },
  {
    title: "Web Uygulaması",
    description: "Giriş, panel ve veritabanı gerektiren özel yazılım çözümleri.",
    icon: "layout",
  },
  {
    title: "Landing Page",
    description: "Kampanya ve reklamlar için dönüşüm odaklı tek sayfalık siteler.",
    icon: "rocket",
  },
  {
    title: "SEO ve Hız",
    description: "Google'da görünürlük ve saniyeler içinde açılan sayfalar.",
    icon: "search",
  },
  {
    title: "Bakım ve Destek",
    description: "Yayın sonrası güncelleme, yedekleme ve teknik destek.",
    icon: "wrench",
  },
];

export const process = [
  { step: "01", title: "Tanışma", text: "İhtiyacınızı ve hedefinizi dinliyorum." },
  { step: "02", title: "Tasarım", text: "Markanıza uygun arayüzü birlikte netleştiriyoruz." },
  { step: "03", title: "Geliştirme", text: "Hızlı, mobil uyumlu ve güvenli şekilde kodluyorum." },
  { step: "04", title: "Yayın", text: "Siteyi yayına alıp sonrasında da yanınızda oluyorum." },
] as const;
