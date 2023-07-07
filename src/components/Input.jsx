export default function Input({ onChange, placeholder,onKeyDown }) {
    return (
        <input
            className="border border-[#091C1E] px-3 py-1 rounded-sm max-w-[225px]"
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    );
}
