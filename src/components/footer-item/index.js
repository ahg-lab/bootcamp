// destructure
// restructure
// reserved word

// const FooterItem = ({ title, items }) => {
const FooterItem = (props) => {
  return (
    <div className="flex flex-col p-20">
      <p className="text-sm font-bold text-red-800 uppercase">{props?.title}</p>
      {props?.items &&
        props?.items.map((value, key) => {
          return (
            <a key={key} className="text-gray-500 select-none hover:underline hover:cursor-pointer">
              {value}
            </a>
          )
        })}
    </div>
  )
}

export default FooterItem
