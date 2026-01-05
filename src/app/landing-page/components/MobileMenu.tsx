<div
  className={`
    fixed inset-0 z-50
    bg-black/60
    transition-opacity
    ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
    md:hidden
  `}
  onClick={close}
/>

<aside
  className={`
    fixed top-0 right-0 z-50
    h-full w-[85%] max-w-sm
    bg-[#14162b]
    transform transition-transform
    ${open ? 'translate-x-0' : 'translate-x-full'}
    md:hidden
  `}
>
