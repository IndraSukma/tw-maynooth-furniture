import Alpine from "alpinejs"
import focus from "@alpinejs/focus"

Alpine.plugin(focus)

Alpine.store("modalProduct", {
  isOpen: false,
  type: "",

  open(type = "") {
    this.isOpen = true
    this.type = type
  },
  close() {
    this.isOpen = false
  },
})

Alpine.data("navbar", () => ({
  navbarAtTop: window.pageYOffset < 50,
  navbar: {
    ["@scroll.window"]() {
      this.navbarAtTop = window.pageYOffset < 50
    },
  },
}))

Alpine.data("dropdown", () => ({
  open: false,

  dropdownTrigger: {
    ["@click.prevent"]() {
      this.open = !this.open
    },
  },

  dropdownMenu: {
    ["x-show"]() {
      return this.open
    },
    ["@click.outside"]() {
      this.open = false
    },
  },
}))

Alpine.data("modal", () => ({
  open: false,

  modalTrigger: {
    ["@focus"]() {
      this.open = true
    },
  },
  modalDialog: {
    ["x-show"]() {
      return this.open
    },
    // ["x-trap.noscroll.noreturn.inert"]() {
    //   return this.open
    // },
  },
  modalBackdrop: {
    ["x-show"]() {
      return this.open
    },
    ["@click"]() {
      this.open = false
    },
  },
}))

window.Alpine = Alpine
Alpine.start()
