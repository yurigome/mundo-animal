import dog from "@/assets/cat-dog.jpg";
import cat from "@/assets/cat-cat.jpg";
import bird from "@/assets/cat-bird.jpg";
import rabbit from "@/assets/cat-rabbit.jpg";

export const SITE = {
  name: "Mundo Animal",
  address: "Av. Central Ewerton Xavier - Itaipu, Niterói - RJ, 24340-105",
  mobile: "(21) 98785-7965",
  phone: "(21) 2609-0766",
  whatsappUrl:
    "https://wa.me/5521987857965?text=" +
    encodeURIComponent("Olá, Mundo Animal! Gostaria de mais informações."),
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Mundo Animal Av. Central Ewerton Xavier Itaipu Niterói RJ"),
};

export type Category = {
  slug: string;
  name: string;
  image?: string;
  tagline: string;
  items: string[];
};

export const CATEGORIES: Category[] = [
  {
    slug: "cachorros",
    name: "Cachorros",
    image: dog,
    tagline: "Tudo para o seu melhor amigo, do filhote ao sênior.",
    items: ["Rações secas e úmidas", "Petiscos e ossinhos", "Coleiras e guias", "Caminhas e casinhas", "Brinquedos", "Higiene e banho"],
  },
  {
    slug: "gatos",
    name: "Gatos",
    image: cat,
    tagline: "Conforto e nutrição para felinos exigentes.",
    items: ["Rações e sachês", "Areia sanitária", "Arranhadores", "Caixas de transporte", "Brinquedos", "Comedouros e bebedouros"],
  },
  {
    slug: "passaros",
    name: "Pássaros",
    image: bird,
    tagline: "Gaiolas, sementes e utensílios para aves.",
    items: ["Gaiolas e viveiros", "Misturas de sementes", "Comedouros e bebedouros", "Poleiros", "Vitaminas", "Banheiras"],
  },
  {
    slug: "coelhos",
    name: "Coelhos",
    image: rabbit,
    tagline: "Alimentação e abrigo para roedores e coelhos.",
    items: ["Rações para coelhos", "Feno", "Gaiolas", "Bebedouros", "Serragem e forração", "Petiscos naturais"],
  },
  {
    slug: "medicamentos",
    name: "Medicamentos",
    tagline: "Medicamentos veterinários e cuidados com a saúde.",
    items: ["Antipulgas e carrapaticidas", "Vermífugos", "Vitaminas e suplementos", "Shampoos dermatológicos", "Curativos", "Medicamentos sob orientação"],
  },
  {
    slug: "acessorios",
    name: "Acessórios",
    tagline: "Comedouros, bebedouros, gaiolas e muito mais.",
    items: ["Comedouros e bebedouros", "Gaiolas", "Caixas de transporte", "Roupinhas", "Coleiras", "Itens de passeio"],
  },
];

export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
