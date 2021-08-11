initSidebarItems({"fn":[["add","Adds two primitive arrays with the same type. Panics if the sum of one pair of values overflows."],["add_scalar","Adds a scalar T to a primitive array of type T. Panics if the sum of the values overflows."],["checked_add","Checked addition of two primitive arrays. If the result from the sum overflows, the validity for that index is changed to None"],["checked_add_scalar","Checked addition of a scalar T to a primitive array of type T. If the result from the sum overflows then the validity index for that value is changed to None"],["overflowing_add","Overflowing addition of two primitive arrays. If the result from the sum is larger than the possible number for this type, the result for the operation will be an array with overflowed values and a  validity array indicating the overflowing elements from the array."],["overflowing_add_scalar","Overflowing addition of a scalar T to a primitive array of type T. If the result from the sum is larger than the possible number for this type, then the result will be an array with overflowed values and a validity array indicating the overflowing elements from the array"],["saturating_add","Saturating addition of two primitive arrays. If the result from the sum is larger than the possible number for this type, the result for the operation will be the saturated value."],["saturating_add_scalar","Saturated addition of a scalar T to a primitive array of type T. If the result from the sum is larger than the possible number for this type, then the result will be saturated"]]});