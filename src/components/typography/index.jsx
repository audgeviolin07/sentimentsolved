export function TypographyH1({ children, className }) {
    return (
      <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`} >
        { children }
      </h1>
    )
}

export function TypographyH2({ children, className }) {
    return (
      <h2 className={`scroll-m-20 text-3xl font-semibold tracking-tight transition-colors ${className}`}>
        { children }
      </h2>
    )
  }


  export function TypographyH3({ children, className}) {
    return (
      <h3 className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}>
        { children }
      </h3>
    )
  }

  export function TypographyH4({ children, className }) {
    return (
      <h4 className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}>
        { children }
      </h4>
    )
  }

  export function TypographyP({ children, className }) {
    return (
      <p className={`leading-7 ${className}`}>
        { children }
      </p>
    )
  }