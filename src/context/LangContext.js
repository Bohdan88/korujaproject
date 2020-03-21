import React, { useState, useEffect } from "react";

const LangContext = React.createContext({
  lang: "",
  currentLangData: {},
  switchLang: () => {}
});

export default LangContext;

export const LangProvider = props => {
  const [lang, setLang] = useState(
    window.localStorage.getItem("appUILang") || window.navigator.language
  );

  useEffect(() => {
    const selectedLang = window.localStorage.getItem("appUILang");

    if (selectedLang) {
      setLang(selectedLang);
    }
  }, [lang]);

  const switchLang = ln => {
    setLang(ln);
    window.localStorage.setItem("appUILang", ln);
  };

  return (
    <LangContext.Provider
      value={{
        lang,
        switchLang,
        currentLangData: langData[lang]
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
        " is a wholesale company which provides professional makeup products from South Korea and Japan."
      ],
      current: [
        "Currently, KoRuJa Trading is an official dealer of more than 10 brands. Trademarks of brands are already registered or in the process of registration in Russia, Ukraine and the countries of the Eurasian Union."
      ],
      spec: ["Our specialization is: "],
      list: [
        "Wholesale supply of cosmetic and cosmetology products",
        "OEM and ODM production",
        "Own brand of cosmetology products called ELOHA"
      ]
    },
    products: {
      header: ["PRODUCTS"],
      tabNames: {
        cosmetology: "COSMETOLOGY",
        lifting: "LIFTING THREAD",
        cosmetics: "COSMETICS AND OTHER PRODUCTS"
      },
      subTabNames: {
        toxins: "TOXINS",
        fillers: "FILLERS",
        meso: "MESO"
      },
      services: {
        header: [
          "Contract manufacturing of cosmetics and accessories in South Korea under your own brand"
        ],
        steps: {
          choice: {
            header: "ODM / OEM",
            desc: [
              "OEM is a company that produces parts and equipment that may be marketed by another manufacturer. ",
              "ODM is a company that designs and manufactures a product, as specified, that is eventually rebranded by another firm for sale."
            ]
          },
          test: {
            header: "Experimental sample",
            desc: [
              "After the work plan has been agreed and approved, the process of manufacturing an experimental sample for testing is about 20 days."
            ]
          },
          prod: {
            header: "Mass production",
            desc: [
              "The term of mass production depends on the production volume, which usually takes around 30 days."
            ]
          }
        }
      }
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
        "Unfortunately the message cannot be sent due to technical issues. We apologize for inconvenience :("
    },
    footer: {
      company: ['Export Company KoRuJa "Direct Korea/ Direct Japan"'],
      info: ["CONTACT INFO"],
      office: ["Head Office: "],
      mail: ["Email"]
    },

    app: {
      language: "en"
    }
  },
  "ru-RU": {
    about: {
      header: ["О НАС"],
      desc: [
        " оптовая экспортная компания профессиональной косметики и  косметологичкеских препаратов из Ю.Кореи и Японии."
      ],
      current: [
        "В настоящее время компания KoRuJa Trading является официальным дилером более 10 торговых марок. Торговые марки брендов уже зарегистрированы или в процессе регистрации на территории России, Украины и стран Евроазиатского Союза."
      ],
      spec: ["Наша специализация: "],
      list: [
        "Оптовые поставки косметических и косметологических товаров",
        "Производство OEM, ODM",
        "Собственный бренд косметологической продукции ELOHA"
      ]
    },
    products: {
      header: ["ПРОДУКЦИЯ"],
      tabNames: {
        cosmetology: "КОСМЕТОЛОГИЯ",
        lifting: "НИТЕВОЙ ЛИФТИНГ",
        cosmetics: "КОСМЕТИКА И ДРУГИЕ ТОВАРЫ"
      },
      subTabNames: {
        toxins: "ТОКСИНЫ",
        fillers: "ФИЛЛЕРЫ",
        meso: "МЕЗОПРЕПАРАТЫ"
      },
      services: {
        header: [
          "Контрактное производство косметики и аксессуаров в Ю.Корее под собственной торговой маркой"
        ],
        steps: {
          choice: {
            header: "ODM / OEM",

            desc: [
              "OEM – контрактное производство, где завод изготовитель выполнит согласно вашей рецептуре и техническому заданию весь комплекс работ по производству косметического продукта.",
              "ODM – включает полный цикл разработки и производства, в том числе составление рецептуры, нейминга и  дизайна упаковки."
            ]
          },
          test: {
            header: "Экспериментальный образец",
            desc: [
              "После того, как план работ согласован и утверждён, процесс изготовления экспериментального образца для тестирования составляет порядка 20 дней."
            ]
          },
          prod: {
            header: "Серийное производство",
            desc: [
              "Срок серийного производства зависит от объёмов партии и составляет в среднем от 30 дней."
            ]
          }
        }
      }
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
        "К сожалению на сайте технические неполадки. Мы извиняемся за неудобство :("
    },
    footer: {
      company: ['Экспортная компания KoRuJa "Прямая Корея/Прямая Япония"'],
      info: ["КОНТАКТНАЯ ИНФОРМАЦИЯ"],
      office: ["Главный Офис: "],
      mail: ["Эл. почта"]
    },
    app: {
      language: "ru"
    }
  }
};
