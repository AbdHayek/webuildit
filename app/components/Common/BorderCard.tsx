export default function BorderCard() {
  return (
    <>
      <div
        className="hidden sm:block absolute top-0 left-[0%] w-[10%] h-[10%] border-t border-l rounded-tl-2xl z-0"
        style={{
          borderTopColor: "rgba(146, 84, 236, 0.6)",
          borderLeftColor: "rgba(146, 84, 236, 0.6)",
        }}
      />
      <div
        className="hidden sm:block absolute top-0 left-[0%] w-[20%] h-[20%] border-t border-l rounded-tl-2xl z-9999"
        style={{
          borderTopColor: "rgba(146, 84, 236, 0.3)",
          borderLeftColor: "rgba(146, 84, 236, 0.3)",
        }}
      />

      <div
        className="hidden sm:block absolute bottom-0 right-[0%] w-[10%] h-[10%] border-b border-r rounded-br-2xl z-0"
        style={{
          borderBottomColor: "rgba(146, 84, 236, 0.6)",
          borderRightColor: "rgba(146, 84, 236, 0.6)",
        }}
      />
      <div
        className="hidden sm:block absolute bottom-0 right-[0%] w-[20%] h-[20%] border-b border-r rounded-br-2xl z-9999"
        style={{
          borderBottomColor: "rgba(146, 84, 236, 0.3)",
          borderRightColor: "rgba(146, 84, 236, 0.3)",
        }}
      />
    </>
  );
}
