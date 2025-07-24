import React, { useMemo, useState } from "react";
function Table({ data }) {
  const [openParent, setOpenParent] = useState({});
  const [openCategory, setOpenCategory] = useState({});
  const [openAll, setOpenAll] = useState(true);
  const calcTotal = (items) => {
    return items.reduce(
      (acc, item) => {
        acc.remind_start_amount += Number(item.remind_start_amount) || 0;
        acc.remind_start_sum += Number(item.remind_start_sum) || 0;
        acc.remind_income_amount += Number(item.remind_income_amount) || 0;
        acc.remind_income_sum += Number(item.remind_income_sum) || 0;
        acc.remind_outgo_amount += Number(item.remind_outgo_amount) || 0;
        acc.remind_outgo_sum += Number(item.remind_outgo_sum) || 0;
        acc.remind_end_amount += Number(item.remind_end_amount) || 0;
        acc.remind_end_sum += Number(item.remind_end_sum) || 0;
        return acc;
      },
      {
        remind_start_amount: 0,
        remind_start_sum: 0,
        remind_income_amount: 0,
        remind_income_sum: 0,
        remind_outgo_amount: 0,
        remind_outgo_sum: 0,
        remind_end_amount: 0,
        remind_end_sum: 0,
      }
    );
  };
  const total = useMemo(() => calcTotal(data), [data]);
  const groupedData = useMemo(() => {
    return data.reduce((acc, item) => {
      if (!acc[item.parent]) acc[item.parent] = {};
      if (!acc[item.parent][item.category])
        acc[item.parent][item.category] = [];
      acc[item.parent][item.category].push(item);
      return acc;
    }, {});
  }, [data]);
  return (
    <div className="container mx-auto max-w-[1280px] overflow-x-auto p-4">
      <table className="min-w-full border border-gray-300 text-sm">
        <thead className="bg-gray-100 text-gray-800">
          <tr>
            <th
              rowSpan="2"
              className="border border-[#969696] px-2 py-[4px]  w-68"
            >
              <button
                onClick={() => setOpenAll(!openAll)}
                className="mr-2 w-[24px] h-[24px] bg-[#c6c6c6] rounded-[8px] font-bold text-black shadow-md transition-all duration-200 ease-in-out transform hover:scale-110"
              >
                {openAll ? "−" : "+"}
              </button>
              Наименование
            </th>
            <th rowSpan="2" className="border border-[#969696] px-2 py-[4px] ">
              Цвет
            </th>
            <th rowSpan="2" className="border border-[#969696] px-2 py-[4px] ">
              Ед изм
            </th>
            <th rowSpan="2" className="border border-[#969696] px-2 py-[4px] ">
              Артикул
            </th>
            <th rowSpan="2" className="border border-[#969696] px-2 py-[4px] ">
              Цена учетная
            </th>
            <th
              colSpan="2"
              className="border border-[#969696] px-2 py-[4px]  bg-green-100 text-center"
            >
              Сальдо начало периода
            </th>
            <th
              colSpan="2"
              className="border border-[#969696] px-2 py-[4px]  bg-blue-100 text-center"
            >
              Приход
            </th>
            <th
              colSpan="2"
              className="border border-[#969696] px-2 py-[4px]  bg-red-100 text-center"
            >
              Расход
            </th>
            <th
              colSpan="2"
              className="border border-[#969696] px-2 py-[4px]  bg-yellow-100 text-center"
            >
              Сальдо на конец периода
            </th>
          </tr>
          <tr>
            <th className="border border-[#969696] bg-green-100 px-2 py-[4px] ">
              Кол-во
            </th>
            <th className="border border-[#969696] bg-green-100 px-2 py-[4px] ">
              Сумма
            </th>
            <th className="border border-[#969696] bg-blue-100 px-2 py-[4px] ">
              Кол-во
            </th>
            <th className="border border-[#969696] bg-blue-100 px-2 py-[4px] ">
              Сумма
            </th>
            <th className="border border-[#969696] bg-red-100 px-2 py-[4px] ">
              Кол-во
            </th>
            <th className="border border-[#969696] bg-red-100 px-2 py-[4px] ">
              Сумма
            </th>
            <th className="border border-[#969696] bg-yellow-100 px-2 py-[4px] ">
              Кол-во
            </th>
            <th className="border border-[#969696] bg-yellow-100 px-2 py-[4px] ">
              Сумма
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-200 font-bold">
            <td className="border text-center border-[#969696] px-2 py-[6px] ">
              Итого
            </td>
            <td className="border text-center border-[#969696] px-2 py-[6px] "></td>
            <td className="border text-center border-[#969696] px-2 py-[6px] "></td>
            <td className="border text-center border-[#969696] px-2 py-[6px] "></td>
            <td className="border text-center border-[#969696] px-2 py-[6px] "></td>
            <td className="border text-center border-[#969696] px-2 py-[6px] ">
              {total.remind_start_amount}
            </td>
            <td className="border text-center border-[#969696] px-2 py-[6px] ">
              {total.remind_start_sum}
            </td>
            <td className="border text-center border-[#969696] px-2 py-[6px] ">
              {total.remind_income_amount}
            </td>
            <td className="border text-center border-[#969696] px-2 py-[6px] ">
              {total.remind_income_sum}
            </td>
            <td className="border text-center border-[#969696] px-2 py-[6px] ">
              {total.remind_outgo_amount}
            </td>
            <td className="border text-center border-[#969696] px-2 py-[6px] ">
              {total.remind_outgo_sum}
            </td>
            <td className="border text-center border-[#969696] px-2 py-[6px] ">
              {total.remind_end_amount}
            </td>
            <td className="border text-center border-[#969696] px-2 py-[6px] ">
              {total.remind_end_sum}
            </td>
          </tr>
          {openAll &&
            Object.keys(groupedData).map((parent) => {
              const parentItems = Object.values(groupedData[parent]).flat();
              const parentTotal = calcTotal(parentItems);
              return (
                <React.Fragment key={parent}>
                  <tr className="bg-gray-100  font-bold">
                    <td
                      className="border border-[#969696] px-[8px] py-[4px] cursor-pointer"
                      onClick={() =>
                        setOpenParent((prev) => ({
                          ...prev,
                          [parent]: !prev[parent],
                        }))
                      }
                    >
                      <button className="mr-2 w-[24px] h-[24px] bg-[#c6c6c6] rounded-[8px] font-bold text-black shadow-md transition-all duration-200 ease-in-out transform hover:scale-110">
                        {openParent[parent] ? (
                          <span className="text-[14px] leading-none">−</span>
                        ) : (
                          <span className="text-[16px] leading-none">+</span>
                        )}
                      </button>
                      {parent}
                    </td>
                    <td className="border text-center border-[#969696]"></td>
                    <td className="border text-center border-[#969696]"></td>
                    <td className="border text-center border-[#969696]"></td>
                    <td className="border text-center border-[#969696]"></td>
                    <td className="border text-center border-[#969696] px-[8px] ">
                      {parentTotal.remind_start_amount}
                    </td>
                    <td className="border text-center border-[#969696] px-[8px] ">
                      {parentTotal.remind_start_sum}
                    </td>
                    <td className="border text-center border-[#969696] px-[8px] ">
                      {parentTotal.remind_income_amount}
                    </td>
                    <td className="border text-center border-[#969696] px-[8px] ">
                      {parentTotal.remind_income_sum}
                    </td>
                    <td className="border text-center border-[#969696] px-[8px] ">
                      {parentTotal.remind_outgo_amount}
                    </td>
                    <td className="border text-center border-[#969696] px-[8px] ">
                      {parentTotal.remind_outgo_sum}
                    </td>
                    <td className="border text-center border-[#969696] px-[8px] ">
                      {parentTotal.remind_end_amount}
                    </td>
                    <td className="border text-center border-[#969696] px-[8px] ">
                      {parentTotal.remind_end_sum}
                    </td>
                  </tr>
                  {openParent[parent] &&
                    Object.keys(groupedData[parent]).map((category) => {
                      const categoryItems = groupedData[parent][category];
                      const categoryTotal = calcTotal(categoryItems);

                      return (
                        <React.Fragment key={category}>
                          <tr className="bg-gray-200 font-bold">
                            <td
                              className="border border-[#969696] px-[8px] py-[4px] pl-6 cursor-pointer"
                              onClick={() =>
                                setOpenCategory((prev) => ({
                                  ...prev,
                                  [category]: !prev[category],
                                }))
                              }
                            >
                              <button className="mr-2 w-[24px] h-[24px] bg-[#c6c6c6] rounded-[8px] font-bold text-black shadow-md transition-all duration-200 ease-in-out transform hover:scale-110">
                                {openCategory[category] ? (
                                  <span className="text-[14px] leading-none">
                                    −
                                  </span>
                                ) : (
                                  <span className="text-[16px] leading-none">
                                    +
                                  </span>
                                )}
                              </button>
                              {category}
                            </td>
                            <td className="border text-center border-[#969696] px-[8px] "></td>
                            <td className="border text-center border-[#969696] px-[8px] "></td>
                            <td className="border text-center border-[#969696] px-[8px] "></td>
                            <td className="border text-center border-[#969696] px-[8px] "></td>
                            <td className="border text-center border-[#969696] px-[8px] ">
                              <span className=" font-[600] text-[14px] ">
                                {categoryTotal.remind_start_amount}
                              </span>
                            </td>
                            <td className="border text-center border-[#969696] px-[8px] ">
                              <span className="font-[600] text-[14px]">
                                {categoryTotal.remind_start_sum}
                              </span>
                            </td>
                            <td className="border text-center border-[#969696] px-[8px] ">
                              <span className="font-[600] text-[14px]">
                                {categoryTotal.remind_income_amount}
                              </span>
                            </td>
                            <td className="border text-center border-[#969696] px-[8px] ">
                              <span className="font-[600] text-[14px]">
                                {categoryTotal.remind_income_sum}
                              </span>
                            </td>
                            <td className="border text-center border-[#969696] px-[8px] ">
                              <span className="font-[600] text-[14px]">
                                {categoryTotal.remind_outgo_amount}
                              </span>
                            </td>
                            <td className="border text-center border-[#969696] px-[8px] ">
                              <span className="font-[600] text-[14px]">
                                {categoryTotal.remind_outgo_sum}
                              </span>
                            </td>
                            <td className="border text-center border-[#969696] px-[8px] ">
                              <span className="font-[600] text-[14px]">
                                {categoryTotal.remind_end_amount}
                              </span>
                            </td>
                            <td className="border text-center border-[#969696] px-[8px] ">
                              <span className="font-[600] text-[14px]">
                                {categoryTotal.remind_end_sum}
                              </span>
                            </td>
                          </tr>
                          {openCategory[category] &&
                            categoryItems.map((item, index) => (
                              <tr key={item.material_id}>
                                <td className="border border-[#969696] gap-3 px-[4px] py-[4px] pl-8">
                                  <div className="flex gap-3 ">
                                    <span className="text-[15px] font-bold ">
                                      {index + 1}.
                                    </span>
                                    <span className="font-[Inter] text-blue-500 pt-[2px] text-[14px] font-[500] ">
                                      {item.name}
                                    </span>
                                  </div>
                                </td>
                                <td className="border text-center border-[#969696] px-[4px] py-[4px] ">
                                  <span className="text-[14px] ">
                                    {item.color &&
                                    typeof item.color === "object"
                                      ? item.color.name
                                      : item.color || "-"}
                                  </span>
                                </td>
                                <td className="border text-center border-[#969696] px-[4px] py-[4px] ">
                                  <span className="text-[14px] font-[600] ">
                                    {item.unit}
                                  </span>
                                </td>
                                <td className="border text-center border-[#969696] px-[4px] py-[4px] ">
                                  <span className="text-[14px] font-[600]">
                                    {item.code}
                                  </span>
                                </td>
                                <td className="border text-center border-[#969696] px-[4px] py-[4px] ">
                                  <span className="text-[14px] font-[600]">
                                    {item.last_price}
                                  </span>
                                </td>
                                <td className="border text-center border-[#969696] px-[4px] py-[4px] ">
                                  <span className="text-[14px] font-[600]">
                                    {item.remind_start_amount}
                                  </span>
                                </td>
                                <td className="border text-center border-[#969696] px-[4px] py-[4px] ">
                                  <span className="text-[14px] font-[600]">
                                    {item.remind_start_sum}
                                  </span>
                                </td>
                                <td className="border text-center border-[#969696] px-[4px] py-[4px] ">
                                  <span className="text-[14px] font-[600]">
                                    {item.remind_income_amount}
                                  </span>
                                </td>
                                <td className="border text-center border-[#969696] px-[4px] py-[4px] ">
                                  <span className="text-[14px] font-[600]">
                                    {item.remind_income_sum}
                                  </span>
                                </td>
                                <td className="border text-center border-[#969696] px-[4px] py-[4px] ">
                                  <span className="text-[14px] font-[600]">
                                    {item.remind_outgo_amount}
                                  </span>
                                </td>
                                <td className="border text-center border-[#969696] px-[4px] py-[4px] ">
                                  <span className="text-[14px] font-[600]">
                                    {item.remind_outgo_sum}
                                  </span>
                                </td>
                                <td className="border text-center border-[#969696] px-[4px] py-[4px] ">
                                  <span className="text-[14px] font-[600]">
                                    {item.remind_end_amount}
                                  </span>
                                </td>
                                <td className="border text-center border-[#969696] px-[4px] py-[4px] ">
                                  <span className="text-[14px] font-[600]">
                                    {item.remind_end_sum}
                                  </span>
                                </td>
                              </tr>
                            ))}
                        </React.Fragment>
                      );
                    })}
                </React.Fragment>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
