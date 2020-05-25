import React, { useState, useEffect } from "react";
import { LANGUAGES } from "../constants";

const LangContext = React.createContext({
  lang: "ru-RU",
  currentLangData: {},
  switchLang: () => {},
});

export default LangContext;

export const LangProvider = (props) => {
  const [lang, setLang] = useState(LANGUAGES["ru"]);

  useEffect(() => {}, [lang]);

  const switchLang = (ln) => {
    const chosenLang =
      lang === LANGUAGES["ru"] ? LANGUAGES["en"] : LANGUAGES["ru"];
    setLang(chosenLang);
  };

  return (
    <LangContext.Provider
      value={{
        lang,
        switchLang,
        currentLangData: langData[lang],
      }}
    >
      {props.children}
    </LangContext.Provider>
  );
};

const langData = {
  "en-US": {
    about: {
      header: ["ABOUT US"],
      desc: [
        " is a wholesale company which provides professional makeup products from South Korea and Japan.",
      ],
      current: [
        "Currently, KoRuJa Trading is an official dealer of more than 10 brands. Trademarks of brands are already registered or in the process of registration in Russia, Ukraine and the countries of the Eurasian Union.",
      ],
      spec: ["Our specialization is: "],
      list: [
        "Wholesale supply of cosmetic and cosmetology products",
        "OEM and ODM production",
        "Own brands of cosmetology products called ELOHA and iLLUMA",
      ],
    },
    products: {
      header: ["PRODUCTS"],
      tabNames: {
        cosmetology: "COSMETOLOGY",
        lifting: "LIFTING THREAD",
        cosmetics: "COSMETICS AND OTHER PRODUCTS",
        newItems: "NEW BRAND",
      },
      subTabNames: {
        toxins: "TOXINS",
        fillers: "FILLERS",
        meso: "MESO",
      },
      services: {
        header: [
          "Contract manufacturing of cosmetics and accessories in South Korea under your own brand",
        ],
        steps: {
          choice: {
            header: "ODM / OEM",
            desc: [
              "OEM is a company that produces parts and equipment that may be marketed by another manufacturer. ",
              "ODM is a company that designs and manufactures a product, as specified, that is eventually rebranded by another firm for sale.",
            ],
          },
          test: {
            header: "Experimental sample",
            desc: [
              "After the work plan has been agreed and approved, the process of manufacturing an experimental sample for testing is about 20 days.",
            ],
          },
          prod: {
            header: "Mass production",
            desc: [
              "The term of mass production depends on the production volume, which usually takes around 30 days.",
            ],
          },
        },
      },
      newItem: {
        desc: [
          "iLLUMA PN Booster is an innovative method to fight all age-related skin changes. An unbelievable mix of hyaluronic acid, polynucleotides and peptides for a complex of effects in every treatment. ",
        ],

        accordion: [
          {
            listTitle: ["Ingridients"],
            list: [
              "The booster contains 12 mg / ml of stabilized Shiseido hyaluronic acid, which creates the effect of an intradermal filler and continues to nourish skin and fill it with moisture for three days after the treatment.",
            ],
          },
          {
            listTitle: [
              "The PN polynucleotides (DNA + RNA) included in the composition",
            ],
            list: [
              "Activate the general metabolism of the cell",
              "Normalize local skin immunity",
              "Stimulate the production of structural components of the dermis",
              "Block photo-damage of their own cell DNA, reducing the number of atypical cells",
              "Regulate melanogenesis by stabilizing cell membranes, which significantly reduces the sensitivity of cells to the damaging effects of chemicals and radiation",
            ],
          },
          {
            listTitle: ["Contains 2 anti-aging peptides"],
            list: [
              "Acetyl hexapeptide-8 is specifically designed to combat facial wrinkles. It effectively reduces wrinkles on the neck and around the eyes. The peptide has proven to not only effectively reduce existing wrinkles, but to also prevent the appearance of new ones",
              "Palmitoyl pentapeptide - 4 signal peptide that stimulates the restoration of the structural elements of the dermis - collagen, elastin, fibronectin, glycosaminoglycans",
            ],
          },
          {
            listTitle: ["Effects"],
            list: [
              "Skin repair",
              "Strengthening of barrier properties and strengthening of local immunity of the cells",
              "Skin strengthening and tightening",
              "Hydration",
              "Reduction of pigmentation of various etiologies (including post-traumatic) and normalization of melanogenesis",
              "Stimulation of collagen and elastin synthesis",
              "Facial wrinkle removal",
            ],
          },
          {
            listTitle: ["Course of procedures"],
            list: ["1 treatment per month, between 1 to 3 sessions in total."],
          },
        ],
      },
    },
    contacts: {
      header: ["CONTACTS"],
      userName: ["YOUR NAME"],
      userEmail: ["YOUR EMAIL"],
      message: "YOUR MESSAGE",
      send: "SEND",
      emailError: "Please enter a valid email address",
      nameError: "The field supposed to have more than 1 character",
      textError:
        "The field supposed to have more than 15 and less than 250 characters",
      messageHeader: "Form Completed",
      messageSuccessContent: "Message has been successfully sent!",
      messageFailContent:
        "Unfortunately the message cannot be sent due to technical issues. We apologize for inconvenience :(",
    },
    footer: {
      company: ['Export Company KoRuJa "Direct Korea/ Direct Japan"'],
      info: ["CONTACT INFO"],
      office: ["Head Office: "],
      mail: ["Email"],
    },

    app: {
      language: "en",
    },
  },
  "ru-RU": {
    about: {
      header: ["О НАС"],
      desc: [
        " оптовая экспортная компания профессиональной косметики и  косметологичкеских препаратов из Ю.Кореи и Японии.",
      ],
      current: [
        "В настоящее время компания KoRuJa Trading является официальным дилером более 10 торговых марок. Торговые марки брендов уже зарегистрированы или в процессе регистрации на территории России, Украины и стран Евроазиатского Союза.",
      ],
      spec: ["Наша специализация: "],
      list: [
        "Оптовые поставки косметических и косметологических товаров",
        "Производство OEM, ODM",
        "Собственные бренды косметологической продукции ELOHA и iLLUMA",
      ],
    },
    products: {
      header: ["ПРОДУКЦИЯ"],
      tabNames: {
        newItems: "НОВЫЙ ПРОДУКТ",
        cosmetology: "КОСМЕТОЛОГИЯ",
        lifting: "НИТЕВОЙ ЛИФТИНГ",
        cosmetics: "КОСМЕТИКА И ДРУГИЕ ТОВАРЫ",
      },
      subTabNames: {
        toxins: "ТОКСИНЫ",
        fillers: "ФИЛЛЕРЫ",
        meso: "МЕЗОПРЕПАРАТЫ",
      },
      services: {
        header: [
          "Контрактное производство косметики и аксессуаров в Ю.Корее под собственной торговой маркой",
        ],
        steps: {
          choice: {
            header: "ODM / OEM",

            desc: [
              "OEM – контрактное производство, где завод изготовитель выполнит согласно вашей рецептуре и техническому заданию весь комплекс работ по производству косметического продукта.",
              "ODM – включает полный цикл разработки и производства, в том числе составление рецептуры, нейминга и  дизайна упаковки.",
            ],
          },
          test: {
            header: "Экспериментальный образец",
            desc: [
              "После того, как план работ согласован и утверждён, процесс изготовления экспериментального образца для тестирования составляет порядка 20 дней.",
            ],
          },
          prod: {
            header: "Серийное производство",
            desc: [
              "Срок серийного производства зависит от объёмов партии и составляет в среднем от 30 дней.",
            ],
          },
        },
      },
      newItem: {
        desc: [
          "iLLUMA PN Booster инновационное средство для борьбы со всеми возрастными изменениями кожи. Комплекс из гиалуроновой кислоты, полинуклеотидов и пептидов для комплекса эффектов в одной процедуре.",
        ],

        accordion: [
          {
            listTitle: ["Состав"],
            list: [
              "Бустер содержит 12 мг/мл стабилизированной гиалуроновой кислоты Shiseido, которая создает эффект внутрикожного филлера и наполняет кожу влагой в течении трех дней после процедуры.",
            ],
          },
          {
            listTitle: ["Входящие в состав Полинуклеотиды"],
            list: [
              "Активизируют общий метаболизм клетки",
              "Нормализуют местный иммунитет кожи",
              "Стимулируют выработку структурных компонентов дермы",
              "Блокируют фотоповреждения собственной клеточной ДНК, снижая количество атипичных клеток",
              "Регулирует меланогенез: стабилизирует клеточные мембраны, что значительно снижает чувствительность клеток к повреждающему действию химических веществ и излучения",
            ],
          },
          {
            listTitle: ["Содержит 2 антивозрастных пептида"],
            list: [
              "Ацетил гексапептид-8 специально создан для борьбы с мимическими морщинами, эффективно сокращает морщины на шее и вокруг глаз. Доказано, что этот пептид не только эффективно уменьшает имеющиеся морщины, но и препятствует возникновению новых морщин",
              "Palmitoylpentapeptide – 4 cигнальный пептид, стимулирующий восстановление структурных элементов дермы - коллагена, эластина, фибронектина, гликозаминогликанов",
            ],
          },
          {
            listTitle: ["Эффекты"],
            list: [
              "Репарация кожи",
              "Усиление барьерных свойств и укрепление местного иммунитета",
              "Укрепление и подтяжка кожи",
              "Увлажнение",
              "Борьба с пигментацией различной этиологии (в том числе посттравматической) и нормализация меланогенеза",
              "Стимуляция синтеза коллагена и эластина",
              "Устранение мимических морщин",
            ],
          },
          {
            listTitle: ["Курс процедур"],
            list: ["От 1 до 3 с интервалом 1 раз в 30 дней."],
          },
        ],
      },
    },
    contacts: {
      header: "КОНТАКТЫ",
      userName: "ВАШЕ ИМЯ",
      userEmail: "ВАШ EMAIL",
      message: "ВАШЕ СООБЩЕНИЕ",
      send: "ОТПРАВИТЬ",
      emailError: "Пожалуйста введите корректный email",
      nameError: "Поле должно содержать больше чем 1 символ",
      textError:
        "Поле должно содержать больше чем 15 и меньше чем 250 симоволов",
      messageHeader: "Форма заполненя",
      messageSuccessContent: "Сообщение успешно отправлено!",
      messageFailContent:
        "К сожалению на сайте технические неполадки. Мы извиняемся за неудобство :(",
    },
    footer: {
      company: ['Экспортная компания KoRuJa "Прямая Корея/Прямая Япония"'],
      info: ["КОНТАКТНАЯ ИНФОРМАЦИЯ"],
      office: ["Главный Офис: "],
      mail: ["Эл. почта"],
    },
    app: {
      language: "ru",
    },
  },
};
