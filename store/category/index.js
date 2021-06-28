export const state = () => ({
  items: {
    category: [
      {
        id: '1',
        slug: 'archive',
        title: 'Архивные стеллажи',
        src: 'https://thumb.tildacdn.com/tild6264-6238-4736-b463-383331636339/-/resize/300x/-/format/webp/WhatsApp_Image_2020-.jpg',
        text: 'Предназначены для небольших складских помещений, под легкий и мелкогабаритный груз (архивные помещения, для хранения документов; пункты выдачи, для хранения коробок; небольшие складские помещения при магазинах и предприятиях, для хранения продукции)',
      },
      {
        id: '2',
        slug: 'medium',
        title: 'Среднегрузовые стеллажи',
        src: 'https://thumb.tildacdn.com/tild3761-6235-4164-b461-363366363361/-/resize/300x/-/format/webp/WhatsApp_Image_2020-.jpg',
        text: 'Предназначены для организация складского пространства при производствах или складах предназначенных для хранения крупногабаритного и тяжелого оборудования. Конструктивная особенность этих стеллажей позволяет хранить крупногабаритные и тяжелые грузы, что повышает вместимость и эффективность складского пространства. Грузовые стеллажи отличаются высокой прочностью, жесткостью и износостойкостью! ',
      },
      {
        id: '3',
        slug: 'pallet',
        title: 'Паллетные стеллажи',
        src: 'https://thumb.tildacdn.com/tild3262-3864-4361-a335-633033363531/-/resize/300x/-/format/webp/WhatsApp_Image_2020-.jpg',
        text: 'Высокопрочная и износостойкая конструкция этих стеллажей, была специально спроектирована, для хранения паллет и поддонов на крупных складах при производствах и оптовых предприятиях. Высокая вместимость и надежность в сочетание с простотой сборки - позволяет оптимизировать складское пространство в самые короткие сроки!',
      },
      {
        id: '4',
        slug: 'console',
        title: 'Консольные стеллажи',
        src: 'https://images.ru.prom.st/434336395_w640_h640_konsolnye-stellazhi-novoe.jpg',
        text: 'Консольные стеллажи применимы в разных сферах, где есть необходимость в сохранности малогабаритных, длинномерных и громоздких грузов. Трубы, монтажный профиль, металлопрокат, водосточные системы, длинномерные строительные материалы, обои, деревянные рейки требуется компактно уложить, а консольные стеллажи обладают наиболее подходящей конструкцией для таких целей. Заполнение и разгрузка консольных стеллажей носит фронтальный характер и может производиться как с одной, так и с двух противоположных сторон – стеллаж двухсторонний.',
      },
      {
        id: '5',
        slug: 'deep',
        title: 'Глубинные стеллажи',
        src: 'https://mr-66.ru/wp-content/uploads/2019/05/Stellazhi.jpg',
        text: 'Металлические глубинные стеллажи используется для хранения большого количества одинакового товара, когда особо не необходим доступ к отдельному паллету. Подобного типа системы замечательно зарекомендовали себя во время складирования товаров продовольственного характера с долгим сроком хранения. Привлекают глубинные набивные стеллажи в первую очередь простой, но в тоже время устойчивой конструкцией, состоящей из унифицированных металлических деталей. Поэтому монтаж  таких систем для хранения различных грузов осуществляется в очень короткий срок. К тому же, всегда можно изменить конфигурацию глубинного стеллажа, удалить или добавить нужное количество несущих стоек.',
      },
      {
        id: '6',
        slug: 'cable',
        title: 'Стеллажи для кабельной продукции',
        src: 'https://opt-1298738.ssl.1c-bitrix-cdn.ru/upload/iblock/8fb/8fb8a398659e2e6e214fda3cc75ba54b.jpg?157502510812524',
        text: 'Стеллажи для кабельных барабанов – эффективное оборудование для хранения кабельной продукции различных параметров. Эти изделия востребованы в складских помещениях, где в большом количестве хранятся проволоки и кабели. Они имеют большие размеры, позволяет на них разместить большую массу товара и легко найти в складе нужную номенклатуру. Кабельный стеллаж представляют собой конструкцию сборно-разборного типа.',
      },
      {
        id: '7',
        slug: 'floor',
        title: 'Стеллажи для напольных покрытий',
        src: 'https://mr-66.ru/wp-content/uploads/2020/07/Paternoster-300x298.png',
        text: 'Конструкция представляет собой специальную стойку, на которой можно разместить одновременно несколько рулонов. Для того чтобы продукция держалась и легко перемещалась, стойка комплектуется валами и переставными крюками. Их количество зависит от желания заказчика.',
      },
    ],
    subcategory: [
      {
        id: '11',
        title: 'Стеллажи СТФЛ ',
        parent_id: '1',
        img: 'https://metall-zavod.ru/upload/iblock/059/91fvoca09he0rca2h9gxx546k4d9fkvc.jpg',
        text: 'Модификация стеллажей серии СТФ – стеллажи СТФЛ с допустимой распределенной нагрузкой на каждую полку не более 100 кг и рекомендованной нагрузкой на верхнюю полку – не более 60 кг.',
      },
      {
        id: '12',
        title: 'Стеллажи СТФ ',
        parent_id: '1',
        img: 'https://metall-zavod.ru/upload/iblock/059/91fvoca09he0rca2h9gxx546k4d9fkvc.jpg',
        text: '',
      },
      {
        id: '13',
        title: 'Стеллажи СТФУ ',
        parent_id: '1',
        img: 'https://metall-zavod.ru/upload/iblock/059/91fvoca09he0rca2h9gxx546k4d9fkvc.jpg',
        text: '',
      },
      {
        id: '14',
        title: 'Стеллажи МС-100 ',
        parent_id: '1',
        img: 'https://metall-zavod.ru/upload/iblock/059/91fvoca09he0rca2h9gxx546k4d9fkvc.jpg',
        text: '',
      },
      {
        id: '15',
        title: 'Стеллажи МС ',
        parent_id: '1',
        img: 'https://metall-zavod.ru/upload/iblock/059/91fvoca09he0rca2h9gxx546k4d9fkvc.jpg',
        text: '',
      },
      {
        id: '16',
        title: 'Стеллажи МС-200 ',
        parent_id: '1',
        img: 'https://metall-zavod.ru/upload/iblock/059/91fvoca09he0rca2h9gxx546k4d9fkvc.jpg',
        text: '',
      },
      {
        id: '17',
        title: 'Стеллажи MS-Standart ',
        parent_id: '1',
        img: 'https://metall-zavod.ru/upload/iblock/059/91fvoca09he0rca2h9gxx546k4d9fkvc.jpg',
        text: '',
      },
      {
        id: '18',
        title: 'Стеллажи MS-Strong ',
        parent_id: '1',
        img: 'https://metall-zavod.ru/upload/iblock/059/91fvoca09he0rca2h9gxx546k4d9fkvc.jpg',
        text: '',
      },
      {
        id: '19',
        title: 'Стеллажи MS-Hard ',
        parent_id: '1',
        img: 'https://metall-zavod.ru/upload/iblock/059/91fvoca09he0rca2h9gxx546k4d9fkvc.jpg',
        text: '',
      },
    ],
  },
  item: {
    stellazh: {},
  },
})
export const actions = {
  fetchBlank({ commit }) {},
  postBlank({ commit }, data) {},
  putBlank({ commit }, data) {},
}
export const mutations = {
  setStellazh(state, data) {
    state.item.stellazh = data
  },
  setBlank1(state, data) {},
  setBlank2(state, data) {},
}
export const getters = {
  getCategoryItems(state) {
    return state.items.category
  },
  getCategoryById: (state) => (categoryId) => {
    return state.items.category.find((item) => {
      return item.id === categoryId
    })
  },
  getStellazhByCategory: (state) => (categoryId) => {
    return state.items.subcategory.filter((item) => {
      return item.parent_id === categoryId
    })
  },
  getStellazh(state) {
    return state.item.stellazh
  },
  getBlank2(state) {},
}
