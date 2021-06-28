<template>
  <div class="h-100 w-100 overflow-auto d-flex">
    <div class="d-flex flex-wrap justify-content-center">
      <template v-for="item in catalog">
        <b-card :key="item.title" class="text-center m-4 border-0 shadow" :img-src="item.src" style="max-width: 320px">
          <b-card-text>{{
            item.height + 'x' + item.width + 'x' + item.deep + '. ' + item.weight + 'кг. ' + item.count + ' полок.'
          }}</b-card-text>
          <b-card-text style="color: #5472f9">{{ 'Цена: ' + item.price + ' р.' }}</b-card-text>
          <b-card-text>
            <div class="d-flex flex-row">
              <div v-b-popover.hover.bottom="'Введите нужное кол-во'" class="py-1 pr-2">
                <b-icon icon="hdd-stack" class="m-2" scale="1.7"></b-icon>
              </div>
              <div>
                <b-input v-model="item.itemCount"></b-input>
              </div>
              <div>
                <b-btn variant="outline-corp" class="mx-1">Добавить</b-btn>
              </div>
            </div>
          </b-card-text>
        </b-card>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicCatalogCard',
  data() {
    return {
      catalog: [
        {
          title: 'Стеллаж 1',
          src: 'http://www.standes.ru/published/publicdata/DBSANTEH15/attachments/SC/products_pictures/%D1%81%D1%82%D0%B5%D0%BB%D0%BB%D0%B0%D0%B6-%D0%B4%D1%81%D0%BF-%D0%A1%D0%A2-2-%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%BE%D0%B5-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE-%D0%BA%D0%B0%D1%80%D0%B1%D0%BE%D0%BDgx_enl.jpg',
          deep: '30',
          height: '180',
          width: '70',
          count: '5',
          weight: '150',
          price: '3499',
          itemCount: '1',
        },
        {
          title: 'Стеллаж 2',
          src: 'http://www.standes.ru/published/publicdata/DBSANTEH15/attachments/SC/products_pictures/%D1%81%D1%82%D0%B5%D0%BB%D0%BB%D0%B0%D0%B6-%D0%B4%D1%81%D0%BF-%D0%A1%D0%A2-2-%D1%88%D0%B8%D0%BD%D1%88%D0%B8%D0%BB%D0%B0-%D1%81%D0%B5%D1%80%D0%B0%D1%8Fts_enl.jpg',
          deep: '30',
          height: '180',
          width: '50',
          count: '5',
          weight: '120',
          price: '4599',
          itemCount: '1',
        },
        {
          title: 'Стеллаж 3',
          src: 'http://www.standes.ru/published/publicdata/DBSANTEH15/attachments/SC/products_pictures/%D1%81%D1%82%D0%B5%D0%BB%D0%BB%D0%B0%D0%B6-%D0%B4%D1%81%D0%BF-%D0%A1%D0%A2-2-%D1%88%D0%B8%D0%BD%D1%88%D0%B8%D0%BB%D0%B0-%D1%81%D0%B5%D1%80%D0%B0%D1%8Fts_enl.jpg',
          deep: '30',
          height: '180',
          width: '50',
          count: '5',
          weight: '150',
          price: '3399',
          itemCount: '1',
        },
        {
          title: 'Стеллаж 4',
          src: 'http://www.standes.ru/published/publicdata/DBSANTEH15/attachments/SC/products_pictures/%D1%81%D1%82%D0%B5%D0%BB%D0%BB%D0%B0%D0%B6-%D0%B4%D1%81%D0%BF-%D0%A1%D0%A2-2-%D0%BA%D0%BB%D0%B5%D0%BDft_enl.jpg',
          deep: '30',
          height: '180',
          width: '50',
          count: '5',
          weight: '100',
          price: '5199',
          itemCount: '1',
        },
        {
          title: 'Стеллаж 5',
          src: 'http://www.standes.ru/published/publicdata/DBSANTEH15/attachments/SC/products_pictures/%D1%81%D1%82%D0%B5%D0%BB%D0%BB%D0%B0%D0%B6-%D0%B4%D1%81%D0%BF-%D0%A1%D0%A2-2-%D0%BA%D0%BB%D0%B5%D0%BDft_enl.jpg',
          deep: '30',
          height: '180',
          width: '50',
          count: '5',
          weight: '100',
          price: '5499',
          itemCount: '1',
        },
        {
          title: 'Стеллаж 6',
          src: 'http://www.standes.ru/published/publicdata/DBSANTEH15/attachments/SC/products_pictures/%D1%81%D1%82%D0%B5%D0%BB%D0%BB%D0%B0%D0%B6-%D0%B4%D1%81%D0%BF-%D0%A1%D0%A2-2-%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%BE%D0%B5-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE-%D0%BA%D0%B0%D1%80%D0%B1%D0%BE%D0%BD%20%282%29g5_enl.jpg',
          deep: '30',
          height: '180',
          width: '50',
          count: '5',
          weight: '100',
          price: '4299',
          itemCount: '1',
        },
        {
          title: 'Стеллаж 7',
          src: 'http://www.standes.ru/published/publicdata/DBSANTEH15/attachments/SC/products_pictures/%D1%81%D1%82%D0%B5%D0%BB%D0%BB%D0%B0%D0%B6-%D0%94%D0%A1%D0%9F-%D0%A1%D0%A2-15-300-%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%BE%D0%B5-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE-%D0%BA%D0%B0%D1%80%D0%B1%D0%BE%D0%BDfr_enl.jpg',
          deep: '30',
          height: '180',
          width: '50',
          count: '5',
          weight: '100',
          price: '3999',
          itemCount: '1',
        },
        {
          title: 'Стеллаж 8',
          src: 'http://www.standes.ru/published/publicdata/DBSANTEH15/attachments/SC/products_pictures/%D1%81%D1%82%D0%B5%D0%BB%D0%BB%D0%B0%D0%B6-%D0%94%D0%A1%D0%9F-%D0%A1%D0%A2-15-300-%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%BE%D0%B5-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE-%D0%BA%D0%B0%D1%80%D0%B1%D0%BE%D0%BDfr_enl.jpg',
          deep: '30',
          height: '180',
          width: '50',
          count: '5',
          weight: '100',
          price: '2799',
          itemCount: '1',
        },
        {
          title: 'Стеллаж 9',
          src: 'http://www.standes.ru/published/publicdata/DBSANTEH15/attachments/SC/products_pictures/%D1%81%D1%82%D0%B5%D0%BB%D0%BB%D0%B0%D0%B6-%D0%94%D0%A1%D0%9F-%D0%A1%D0%A2-8-%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%BE%D0%B5-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE-%D0%BA%D0%B0%D1%80%D0%B1%D0%BE%D0%BD%20%282%29mi_enl.jpg',
          deep: '30',
          height: '180',
          width: '50',
          count: '5',
          weight: '100',
          price: '5299',
          itemCount: '1',
        },
        {
          title: 'Стеллаж 10',
          src: 'http://www.standes.ru/published/publicdata/DBSANTEH15/attachments/SC/products_pictures/%D1%81%D1%82%D0%B5%D0%BB%D0%BB%D0%B0%D0%B6-%D0%B4%D1%81%D0%BF-%D0%A1%D0%A2-19-300-%D0%B4%D1%83%D0%B1-%D1%83%D1%80%D0%B1%D0%B0%D0%BD-%D0%BA%D0%BE%D1%84%D0%B5%D0%B9%D0%BD%D1%8B%D0%B9%20%282%29mm_enl.jpg',
          deep: '30',
          height: '180',
          width: '50',
          count: '5',
          weight: '100',
          price: '4799',
          itemCount: '1',
        },
        {
          title: 'Стеллаж 11',
          src: 'http://www.standes.ru/published/publicdata/DBSANTEH15/attachments/SC/products_pictures/%D1%81%D1%82%D0%B5%D0%BB%D0%BB%D0%B0%D0%B6-%D0%B4%D1%81%D0%BF-%D0%A1%D0%A2-19-300-%D0%B4%D1%83%D0%B1-%D1%83%D1%80%D0%B1%D0%B0%D0%BD-%D0%BA%D0%BE%D1%84%D0%B5%D0%B9%D0%BD%D1%8B%D0%B9%20%282%29mm_enl.jpg',
          deep: '30',
          height: '180',
          width: '50',
          count: '5',
          weight: '100',
          price: '5099',
          itemCount: '1',
        },
        {
          title: 'Стеллаж 12',
          src: 'http://www.standes.ru/published/publicdata/DBSANTEH15/attachments/SC/products_pictures/%D1%81%D1%82%D0%B5%D0%BB%D0%BB%D0%B0%D0%B6-%D0%B4%D1%81%D0%BF-%D0%A1%D0%A2-25-%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%BE%D0%B5-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE-%D0%B2%D0%B8%D0%BD%D1%82%D0%B0%D0%B6%20%282%29b4_enl.jpg',
          deep: '30',
          height: '180',
          width: '50',
          count: '5',
          weight: '100',
          price: '3699',
          itemCount: '1',
        },
        {
          title: 'Стеллаж 13',
          src: 'http://www.standes.ru/published/publicdata/DBSANTEH15/attachments/SC/products_pictures/%D1%81%D1%82%D0%B5%D0%BB%D0%BB%D0%B0%D0%B6-%D0%94%D0%A1%D0%9F-%D0%A1%D0%A2-20-%D1%88%D0%B8%D0%BD%D1%88%D0%B8%D0%BB%D0%B0-%D1%81%D0%B5%D1%80%D0%B0%D1%8F4c_enl.jpg',
          deep: '30',
          height: '180',
          width: '50',
          count: '5',
          weight: '100',
          price: '4999',
          itemCount: '1',
        },
        {
          title: 'Стеллаж 14',
          src: 'http://www.standes.ru/published/publicdata/DBSANTEH15/attachments/SC/products_pictures/%D1%81%D1%82%D0%B5%D0%BB%D0%BB%D0%B0%D0%B6-%D0%94%D0%A1%D0%9F-%D0%A1%D0%A2-20-%D1%88%D0%B8%D0%BD%D1%88%D0%B8%D0%BB%D0%B0-%D1%81%D0%B5%D1%80%D0%B0%D1%8F4c_enl.jpg',
          deep: '30',
          height: '180',
          width: '50',
          count: '5',
          weight: '100',
          price: '3599',
          itemCount: '1',
        },
        {
          title: 'Стеллаж 15',
          src: 'http://www.standes.ru/published/publicdata/DBSANTEH15/attachments/SC/products_pictures/%D1%81%D1%82%D0%B5%D0%BB%D0%BB%D0%B0%D0%B6-%D0%94%D0%A1%D0%9F-%D0%A1%D0%A2-20-%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%BE%D0%B5-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE-%D0%BA%D0%B0%D1%80%D0%B1%D0%BE%D0%BD90_enl.jpg',
          deep: '30',
          height: '180',
          width: '50',
          count: '5',
          weight: '100',
          price: '4399',
          itemCount: '1',
        },
      ],
    }
  },
  computed: {},
}
</script>
