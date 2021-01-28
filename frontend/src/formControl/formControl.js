import './formControl.scss'

const Element = Element => ({input, meta, ...props}) => {
   const hasError = meta.error && meta.touched
   return (
      <div className = {'formControl' + " " + (hasError ? 'error' : '')}>
         {hasError && <span>{meta.error}</span>} 
         <div>
            <Element {...input} {...props}/>
         </div>
      </div>
      
   )
}   


export default Element

