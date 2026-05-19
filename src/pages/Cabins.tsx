import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Button from "../ui/Button";
import Modal from "../ui/Modal";

const Cabins = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">All Suites</h1>

<Modal>
  <Modal.Open opens = "cabin-form">
<Button> Add new Cabin</Button>
</Modal.Open>

<Modal.Window name="cabin-form">
<CreateCabinForm/>
</Modal.Window>
</Modal>
      </div>

      <CabinTable />
    </div>
  );
};

export default Cabins;
