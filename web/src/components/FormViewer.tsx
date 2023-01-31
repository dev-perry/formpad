export default function FormViewer() {
  return (
    <div className="border-[#B5BECC] flex-grow border-2 rounded-lg h-[720px] md:w-1/2 px-9 pt-8">
      <form>
        <input type="text"></input>
        <input type="email" placeholder="john@example.com"></input>
        <input type="date"></input>
        <select>
          <option>Corporate event</option>
          <option>Wedding</option>
          <option>Birthday</option>
          <option>Other</option>
        </select>
        <textarea></textarea>
        <label>
          <input type="checkbox"></input>
          Email me news and special offers
        </label>
      </form>
    </div>
  );
}
