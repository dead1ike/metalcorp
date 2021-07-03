<template>
  <div>
    <div>
      <b-img
        class="position-relative noselect"
        style="max-height: 350px; max-width: 429px; bottom: 0px; right: -64px"
        :src="getImg"
        @click="countClick++"
      ></b-img>
      <template v-if="countClick >= 10">
        <audio class="p-5" src="http://skladskoi.com:8820/pepega.mp3" controls></audio>
      </template>
    </div>
    <div class="text-white w-100 bg-black p-4">
      <div class="d-flex w-100">
        <div class="d-flex flex-fill flex-row justify-content-center flex-wrap">
          <div class="m-4 px-5">
            <b-img
              src="https://thumb.tildacdn.com/tild6536-3538-4137-b034-373731613935/-/resize/130x/-/format/webp/__2_2.png"
            ></b-img>
          </div>
          <div class="d-flex flex-row flex-wrap">
            <div class="m-4 d-flex flex-column text-left">
              <div>
                ОБЩЕСТВО С ОГРАНИЧЕННОЙ <br />
                ОТВЕТСТВЕННОСТЬЮ «МЕТАЛЛКОРП»
              </div>
              <hr class="my-4 border-light w-100" />
              <div>ИНН 6678111118</div>
              <div class="mt-2">КПП 667801001</div>
              <div class="mt-2">ОГРН 1216600004587</div>
              <div class="mt-2">ОКПО 47046899</div>
              <div class="mt-2">Номер Р/с 40702810602500090234</div>
              <div class="mt-2">
                Наименование банка Филиал <br />
                Точка Публичного акционерного общества Банка <br />
                «Финансовая Корпорация Открытие»
              </div>
              <div class="mt-2">Номер К/сч 30101810845250000999</div>
              <div class="mt-2">БИК 044525999</div>
            </div>
            <div class="m-4 d-flex flex-column text-left">
              <div>
                <a class="text-white" href="tel:+79068128175">+7 (906) 812-81-75</a> <br />
                <a class="text-white" href="mailto:info@m-lc.ru">info@m-lc.ru</a>
              </div>
              <hr class="my-4 border-light w-100" />
              <div class="mt-0">
                Юридический адрес 620141,РОССИЯ, <br />
                ОБЛ. СВЕРДЛОВСКАЯ, Г. ЕКАТЕРИНБУРГ, <br />
                УЛ. ОЛЬХОВСКАЯ 25/2, КВ. 56
              </div>
              <div class="mt-2">
                Фактический адрес 620014,РОССИЯ,<br />
                ОБЛ. СВЕРДЛОВСКАЯ, Г. ЕКАТЕРИНБУРГ, <br />
                УЛ. РАДИЩЕВА, 4, ОФИС 611
              </div>
              <div class="font-weight-bolder h5 mt-3">
                Генеральный директор <br />
                Шишигин Владислав Евгеньевич
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManagerDashboardFooter',
  data() {
    return {
      imag: {
        image_1: 'https://i.ibb.co/jGfr493/admin.png',
        image_2: 'https://acegif.com/wp-content/uploads/2021/4fh5wi/pepefrg-4.gif',
      },
      countClick: 0,
    }
  },
  computed: {
    getImg() {
      if (this.countClick < 10) return this.imag.image_1
      else return this.imag.image_2
    },
  },
}
</script>
