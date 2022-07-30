<template>
  <div>
    <div class="container">
      <my-button class="button" @click="$router.push('/')">{{ `<` }} Поиск</my-button>
      <my-button class="button"> Править</my-button>
    </div>

    <div class="avatar">

    </div>

    <div class="name">
      {{ contact?.name }}
    </div>

    <div class="row">
      <div class="title">Номер телефона</div>
      <div class="main_title"> {{ contact?.phone !== '' ? contact.phone : 'нет' }}</div>
    </div>

    <div class="row">
      <div class="title">Эл. почта</div>
      <div class="main_title"> {{ contact?.email !== '' ? contact.email : 'нет' }}</div>
    </div>

    <div class="row">
      <div class="title">Тег</div>
      <div class="main_title"> {{ contact?.tag !== '' ? contact.tag : 'нет' }}</div>
    </div>

  </div>
</template>

<script>
import {useContactById} from "../../hooks/useContacts.js";

export default {
  props: ['id', 'setNotFound'],

  updated() {
    if (this.contact.null !== undefined) {
      this.setNotFound()
    }
  },

  setup(props) {
    const {contact, isContactLoading} = useContactById(props.id)

    return {
      contact,
      isContactLoading,
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;

}

.button {
  font-weight: bold;
  font-size: 15px;
}

.name {
  font-weight: bold;
  font-size: 24px;
  text-align: center;
}

.avatar {
  background-color: #333333;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 15px auto 15px auto;
  position: relative;
  background-image: url("https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.row {
  background-color: #f4f4f6;
  margin: 15px auto;
  padding: 15px;
  border-radius: 10px;
}

.title {
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 5px;
}

.main_title {
  color: #007bff;
  font-weight: bold;
  font-size: 15px;
}
</style>