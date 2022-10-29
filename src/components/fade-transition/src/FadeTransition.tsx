import { defineComponent, Transition } from "vue";

const FadeTransition = defineComponent({
  name: 'FadeTransition',
  setup(_props, context) {
    return () => (
      <Transition name="tu-fade" mode="out-in">
        {context.slots.default?.()}
      </Transition>
    )
  }
})

export default FadeTransition
