export const btnClickHandler = () => {
    if (document.startViewTransition) { // (check for browser support)
        document.addEventListener('click', function (event) {
          if (event.target.matches('button')) {
            event.preventDefault() // (we’ll toggle the element ourselves)
            const details = event.target.closest('details')
            document.startViewTransition(() => details.toggleAttribute('open'))
          }
        })
      }
}