export default function TextInput({ required, labelText, type, placeholder, id }) {
    return (
        <>
            <label htmlFor={id} className="text-sm text-slate-500">{labelText}</label>
            <input type={type} required={required} placeholder={placeholder} id={id} className="border border-slate-300 border-solid rounded-md px-4 py-2 bg-white hover:border-green-700 focus:border-green-700" />
        </>
    )
}