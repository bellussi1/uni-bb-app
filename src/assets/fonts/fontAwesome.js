import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronUp)

export default {
  install(app) {
    app.component('font-awesome-icon', FontAwesomeIcon)
  },
}
