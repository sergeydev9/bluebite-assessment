import style from './errorMessage.module.css'

export const ErrorMessage = ({ prepend, error }: { prepend?: string, error: unknown }) => {
  return (
    <div className={style.error}>
      {prepend && `${prepend}: `}
      {error instanceof Error ? (error as Error).message : 'Something wrong happened'}
    </div>
  )
}