<template>
  <div class="container" :class="{'grow': show === true}">


    <div class="space">
      <my-button class="button" @click="hideDialog">Отмена</my-button>
      <div class="title">Контакт</div>
      <my-button class="button"
                 :class="{'disabled': this.name.replace(/\s/g, '') === ''}"
                 @click="addContact"
      >
        Создать
      </my-button>
    </div>
    <div class="avatar">
      <my-button class="avatar_button">Добавить фото</my-button>
    </div>

    <light-line/>
    <my-input v-model="name" placeholder="Имя *"/>
    <light-line/>
    <my-input v-model="phone" placeholder="Номер телефона"/>
    <light-line/>
    <my-input v-model="email" placeholder="Эл. почта"/>
    <light-line/>
    <my-input v-model="tag" placeholder="Тег"/>
    <light-line/>

    <div v-if="loading">Загрузка</div>

  </div>
</template>

<script>
import toggleMixin from "../../mixins/toggleMixin.js";
import {useAddContact} from "../../hooks/useContacts.js";

export default {
  data() {
    return {
      send: false, name: '', phone: '', email: '', tag: '', loading: false
    }
  },
  inject: ['reload'],
  methods: {
    addContact() {
      if (this.name.replace(/\s/g, '') !== '') {
        this.send = true;
        const {isContactAdded, isAddLoading} = useAddContact(this.send, this.name, this.phone, this.email, this.tag);

        this.loading = isAddLoading;

        if (isContactAdded) {
          this.send = false;
          this.name = '';
          this.phone = '';
          this.email = '';
          this.tag = '';
          this.hideDialog();
          this.reload();
        }
      }
    },

  },
  mixins: [toggleMixin],

}
</script>

<style scoped>
.container {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  height: 0;
  max-width: 500px;
  background-color: #f4f4f6;
  border-radius: 20px 20px 0 0;
  z-index: 10;
  transition-property: all;
  transition-duration: .3s;
}

.grow {
  height: 90vh !important;
  display: block;
  /*padding: 0 30px 30px 30px;*/
}

.button {
  font-weight: bold;
  font-size: 15px;
}

.space {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  padding: 0 30px 0 30px;

}

.title {
  font-weight: bold;
  font-size: 15px;
}

.disabled {
  color: rgba(51, 51, 51, 0.35) !important;
  cursor: not-allowed !important;
}

.disabled:hover {
  opacity: 1 !important;
}

.disabled:active {
  color: rgba(51, 51, 51, 0.35) !important;
}

.avatar {
  background-color: #333333;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin: 30px auto 50px auto;
  position: relative;
  background-image: url("https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.avatar_button {
  text-align: center;
  font-size: 13px;
  font-weight: bold;
  position: absolute;
  bottom: -25px;
  left: 0;
  right: 0;
}
</style>