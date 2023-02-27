type WithClickProps = {
  onClick: () => void;
};

export default function withClick(Component: any) {
  return ({ onClick }: WithClickProps) => (
    <button class="focus:outline-none" onClick={onClick}>
      <Component/>
    </button>
  );
}
