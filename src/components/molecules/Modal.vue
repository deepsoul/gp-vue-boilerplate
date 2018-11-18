<template>
  <transition name="modal-fade">
    <div
      v-if="visibility"
      class="modal-background">
      <div class="modal">
        <header>
          <slot name="header"/>
          <button
            type="button"
            class="btn-close"
            @click="close"
          >x</button>
        </header>
        <section>
          <slot name="body">
            CONTENT
          </slot>
        </section>
        <footer>
          <slot name="footer"/>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    // queryParam: {
    //   type: String,
    //   required: true,
    //   default: 'modal'
    // }
  },

  data() {
    return {
      visibility: false
    };
  },

  watch: {
    $route: {
      handler() {
        this.visibility = (this.$route.query.test);
      },
      immediate: true
    }
  },

  methods: {
    close() {
      this.$router.replace(Object.assign({}, this.$router.currentRoute, { query: { test: undefined } }));
    }
  }
};
</script>

<style lang="postcss" scoped>
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

.modal-background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
}

.modal {
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  background: #fff;
  box-shadow: 2px 2px 20px 1px;
}

header,
footer {
  display: flex;
  padding: 15px;
}

header {
  justify-content: space-between;
  color: #4aae9b;
  border-bottom: 1px solid #eee;
}

footer {
  justify-content: flex-end;
  border-top: 1px solid #eee;
}

section {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #4aae9b;
  cursor: pointer;
  background: transparent;
  border: none;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>

