<template>
  <div>
    <div class="text-center">
      <h1>Админка</h1>
    </div>
    <!--Управление каталогом-->
    <div class="d-flex flex-row p-4">
      <h3>Управление каталогом</h3>
      <div class="ml-2">
        <h5 class="mr-2">Тип стеллажа:</h5>
        <b-dd variant="outline-info" size="sm" text="Выбрать">
          <b-dd-item>Архивные стеллажи</b-dd-item>
          <b-dd-item>Среднегрузовые стеллажи</b-dd-item>
          <b-dd-item>Паллетные стеллажи</b-dd-item>
        </b-dd>
      </div>
      <div class="ml-2">
        <h5 class="mr-2">Высота стеллажа:</h5>
        <b-dd variant="outline-info" size="sm" class="w-100" text="Выбрать">
          <b-dd-item>1500 mm</b-dd-item>
          <b-dd-item>1800 mm</b-dd-item>
          <b-dd-item>2000 mm</b-dd-item>
          <b-dd-item>2200 mm</b-dd-item>
          <b-dd-item>2500 mm</b-dd-item>
          <b-dd-item>3000 mm</b-dd-item>
        </b-dd>
        <b-form-input class="mt-2" placeholder="Введите наценку" size="sm"></b-form-input>
      </div>
      <div class="ml-2">
        <h5 class="mr-2">Ширина стеллажа:</h5>
        <b-dd variant="outline-info" size="sm" class="w-100" text="Выбрать">
          <b-dd-item>700 mm</b-dd-item>
          <b-dd-item>1000 mm</b-dd-item>
          <b-dd-item>1200 mm</b-dd-item>
          <b-dd-item>1500 mm</b-dd-item>
        </b-dd>
        <b-form-input class="mt-2" placeholder="Введите наценку" size="sm"></b-form-input>
      </div>
      <div class="ml-2">
        <h5 class="mr-2">Глубина стеллажа:</h5>
        <b-dd variant="outline-info" size="sm" class="w-100" text="Выбрать">
          <b-dd-item>300 mm</b-dd-item>
          <b-dd-item>400 mm</b-dd-item>
          <b-dd-item>500 mm</b-dd-item>
          <b-dd-item>600 mm</b-dd-item>
          <b-dd-item>700 mm</b-dd-item>
          <b-dd-item>800 mm</b-dd-item>
        </b-dd>
        <b-form-input class="mt-2" placeholder="Введите наценку" size="sm"></b-form-input>
      </div>
      <div class="ml-2">
        <h5 class="mr-2">Кол-во полок стеллажа:</h5>
        <b-dd variant="outline-info" size="sm" class="w-100" text="Выбрать">
          <b-dd-item>4</b-dd-item>
          <b-dd-item>5</b-dd-item>
        </b-dd>
        <b-form-input class="mt-2" placeholder="Введите наценку" size="sm"></b-form-input>
      </div>
      <div class="ml-2">
        <h5 class="mr-2">Нагрузка на полку стеллажа:</h5>
        <b-dd variant="outline-info" size="sm" class="w-100" text="Выбрать">
          <b-dd-item>125 kg</b-dd-item>
          <b-dd-item>200 kg</b-dd-item>
        </b-dd>
        <b-form-input class="mt-2" placeholder="Введите наценку" size="sm"></b-form-input>
      </div>
      <div class="ml-2">
        <h5 class="mr-2">Итоговая цена стеллажа:</h5>
        <h5 class="text-center">3200 p.</h5>
      </div>
      <div class="ml-4">
        <h5 class="ml-2">Сохранить стеллаж</h5>
        <b-btn variant="outline-info" size="sm">Установить</b-btn>
      </div>
    </div>
    <!--Загрузка прайса-->
    <div class="d-flex flex-row p-4">
      <div class="mt-4">
        <h4>Загрузка прайса</h4>
      </div>
      <div class="p-4 w-50">
        <b-file browse-text="Загрузить" placeholder="Загрузите либо перетащите файл сюда..."></b-file>
      </div>
      <div class="p-4 d-flex">
        <h5 class="p-0 mr-4">Прайс на данный момент</h5>
        <b-btn variant="outline-info"><b-icon icon="cloud-download"></b-icon></b-btn>
      </div>
    </div>
    <!--Загрузка товара в каталог-->
    <div class="d-flex flex-column p-4">
      <h3 class="mr-4">Загрузка товара в каталог</h3>
      <div>
        <b-file class="w-25" placeholder="Выберите изображение"></b-file>
      </div>
      <div>
        <b-form-textarea class="w-25" placeholder="Описание товара"></b-form-textarea>
      </div>
      <div class="d-flex flex-row">
        <b-dd text="Выберите категорию"></b-dd>
        <b-dd text="Выберите подкатегорию"></b-dd>
        <b-dd text="Выберите высоту"></b-dd>
        <b-dd text="Выберите ширину"></b-dd>
        <b-dd text="Выберите глубину"></b-dd>
        <b-dd text="Выберите кол-во полок"></b-dd>
        <b-dd text="Выберите грузоподъемность на полку"></b-dd>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'manage',
}
</script>

<style scoped></style>
