import { HiPencil, HiTrash } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helper";
import { useDeleteCabin } from "./useDeleteCabin";
import { useEditCabin } from "./useEditCabin";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";

const CabinRow = ({ cabin }) => {
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isEditing, editCabin } = useEditCabin();
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
  } = cabin;

  return (
    <tr
      className="border-b border-gray-100 last:border-0 hover:bg-gray-50
  transition-colors"
    >
      <td className="px-6 py-4">
        <img
          src={image}
          className="block w-20 aspect-[3/2] object-cover object-center
  translate-x-[-7px]"
        />
      </td>
      <td className="px-6 py-4 font-semibold text-gray-600 font-mono">
        {name}
      </td>
      <td className="px-6 py-4 text-sm text-gray-500">
        Fits up to {maxCapacity}
        guests
      </td>
      <td
        className="px-6 py-4 font-semibold
  text-gray-700"
      >
        {formatCurrency(regularPrice)}
      </td>
      <td className="px-6 py-4 text-green-700 font-medium">
        {discount ? formatCurrency(discount) : <span>&mdash;</span>}
      </td>
      {/* <td className="px-6 py-4 text-right">
        <div className="flex justify-end gap-2">
          <button className="text-gray-400 hover:text-gray-600" >
            <HiPencil className="h-5 w-5" />
          </button>
          <button
            onClick={() => deleteCabin(cabinId)}
            disabled={isDeleting}
            className="text-gray-400 hover:text-gray-600"
          >
            <HiTrash className="h-5 w-5" />
          </button>
        </div>
      </td> */}

      <td className="px-6 py-4 text-right">
        <div className="flex justify-end gap-2">
          {/* We'll use a Modal for editing */}
          <Modal>
            <Modal.Open opens="edit">
              <Button variation="secondary" size="small">
                <HiPencil className="h-5 w-5" />
              </Button>
            </Modal.Open>
            <Modal.Window name="edit">
              <CreateCabinForm cabinToEdit={cabin} key={cabinId} />
            </Modal.Window>

            <Modal.Open opens="delete">
              <Button variation="danger" size="small">
                <HiTrash className="h-5 w-5" />
              </Button>
            </Modal.Open>
            <Modal.Window name="delete">
              {/* ConfirmDelete component to be created */}
              <div className="flex flex-col gap-4 p-8">
                <h3 className="text-xl font-bold">Delete cabin</h3>
                <p className="text-gray-500">
                  Are you sure you want to delete this cabin permanently? This
                  action cannot be undone.
                </p>
                <div className="flex justify-end gap-2">
                  <Button
                    variation="secondary"
                    onClick={() => onCloseModal?.()}
                  >
                    Cancel
                  </Button>
                  <Button
                    variation="danger"
                    onClick={() => deleteCabin(cabinId)}
                    disabled={isDeleting}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </Modal.Window>
          </Modal>
        </div>
      </td>
    </tr>
  );
};
export default CabinRow;
