import ProgramsCommonGrid from "src/components/common/ProgramsDetailsData/ProgramsCommonGrid";
import ProgramsCommonAddress from "src/components/common/ProgramsDetailsData/ProgramsCommonAddress";
import UsersCommonStatus from "src/components/common/ProgramsDetailsData/UsersCommonStatus";
import UsersCommonBankInfo from "src/components/common/ProgramsDetailsData/ProgramsCommonBankInfo";
import { formatDate } from "../../../utilities/DateFormatter";
import { convertVintageDate } from "../../../utilities/DateFormatter";
import Moment from "react-moment";

export default function ProgramsDetailsData({
  TableDataValue,
  showRemainingFields,
}: any) {
  if (TableDataValue.entityProgramRole === "ANCHOR_SELLER") {
    TableDataValue.anchorRole = "Seller";
  } else {
    TableDataValue.anchorRole = "Buyer";
  }

  return (
    <>
      <div className="border-solid border-2 rounded-b-2xl shadow-md border-white bg-white">
        <div className="mb-8">
          <div className="grid grid-cols-10 mt-6">
            <div className="grid col-span-5 ">
              <div className="grid grid-rows-10  gap-2">
                <ProgramsCommonGrid
                  KeyName=" Role of Entity"
                  KeyValue={TableDataValue.entityProgramRole}
                />
                {(TableDataValue.entityProgramRole === "ANCHOR_SELLER" ||
                  TableDataValue.entityProgramRole === "ANCHOR_BUYER") && (
                  <ProgramsCommonGrid
                    KeyName="Role of Anchor"
                    KeyValue={TableDataValue.anchorRole}
                  />
                )}

                <ProgramsCommonGrid
                  KeyName="Interest Rate"
                  KeyValue={
                    TableDataValue?.programEgilibity?.interestRatePerAnnum
                  }
                />
              </div>
            </div>
            <div className="grid col-span-5 ">
              <div className="grid grid-rows-10  gap-2">
                <ProgramsCommonGrid
                  KeyName="Total Outstanding"
                  KeyValue={TableDataValue?.programEgilibity?.masterLimit}
                />
                <ProgramsCommonGrid
                  KeyName="Available Limit"
                  KeyValue={
                    TableDataValue?.programEgilibity
                      ?.minimumUtilizationThreshold
                  }
                />
                <ProgramsCommonGrid
                  KeyName=" Invoice Uploded"
                  KeyValue={TableDataValue.InvoicesUploaded}
                />
              </div>
            </div>
          </div>
          {showRemainingFields ? (
            <div className="grid grid-cols-10 mt-2 items-start">
              <div className="grid col-span-5 ">
                <div className="grid grid-rows-10  gap-2">
                  <ProgramsCommonGrid
                    KeyName="Program"
                    KeyValue={TableDataValue?.programEgilibity?.programType}
                  />
                  <ProgramsCommonGrid
                    KeyName="Constitution"
                    KeyValue={
                      TableDataValue?.organisationId?.organisationEntityType
                    }
                  />
                  <ProgramsCommonGrid
                    KeyName="Date of GST Registration"
                    KeyValue={formatDate(
                      TableDataValue?.organisationId?.registrationDate
                    )}
                  />

                  <ProgramsCommonGrid
                    KeyName="Vintage"
                    KeyValue={
                      <Moment fromNow ago>
                        {convertVintageDate(
                          formatDate(
                            TableDataValue?.organisationId?.registrationDate
                          )
                        )}
                      </Moment>
                    }
                  />
                  <ProgramsCommonGrid
                    KeyName=" GST Number"
                    KeyValue={TableDataValue?.organisationId?.gstin[0]}
                  />
                  <ProgramsCommonGrid
                    KeyName=" Primary Industry"
                    KeyValue={"Lorem Ipsum"}
                  />
                  <ProgramsCommonGrid
                    KeyName="Secondary Industry"
                    KeyValue={"Lorem Ipsum"}
                  />
                  {/* <ProgramsCommonGrid
                    KeyName="Email ID - 1"
                    KeyValue={"abcdef@gmail.com"}
                  /> */}

                  <ProgramsCommonAddress
                    KeyName="Address -1"
                    Lane={
                      TableDataValue?.organisationId.addresses
                        .businessAddresses[0].line1
                    }
                    Pincode={
                      TableDataValue?.organisationId.addresses
                        .businessAddresses[0].pinCode
                    }
                    City={
                      TableDataValue?.organisationId.addresses
                        .businessAddresses[0].city
                    }
                  />
                  <UsersCommonStatus
                    KeyName="User-1"
                    UserEmail="user@example.com"
                    StatusValue="Yet to sign up"
                  />
                  <UsersCommonStatus
                    KeyName="User-2"
                    UserEmail="user@example.com"
                    StatusValue="Link Expired"
                    StatusValueStyle="!text-red-600"
                  />
                  <UsersCommonBankInfo
                    KeyName="Bank Details -1"
                    AccountHolderName="Sahil Sharma"
                    AccountNumber="31456787767"
                    IfscCode="ICIC0005456"
                    BankAddress=" No.76/1, ICICI Bank Ltd., Sector-15, Sonipat Haryana, 131001"
                  />
                </div>
              </div>
              <div className="grid col-span-5">
                <div className="grid grid-rows-10  gap-2">
                  <ProgramsCommonGrid
                    KeyName="Total Outstanding"
                    KeyValue={
                      TableDataValue?.programEgilibity?.TotalOutstanding
                    }
                  />
                  <ProgramsCommonGrid
                    KeyName="Available Limit"
                    KeyValue={TableDataValue?.programEgilibity?.AvailableLimit}
                  />
                  <ProgramsCommonGrid
                    KeyName=" Invoice Uploded"
                    KeyValue={TableDataValue?.programEgilibity?.InvoiceUploded}
                  />
                  <ProgramsCommonGrid
                    KeyName="Master Limit (Anchor)"
                    KeyValue={TableDataValue?.programEgilibity?.masterLimit}
                  />
                  <ProgramsCommonGrid
                    KeyName=" Date of Commencement"
                    KeyValue={"DD-MM-YY"}
                  />
                  <ProgramsCommonGrid
                    KeyName="Lender"
                    KeyValue={
                      TableDataValue?.programEgilibity?.financierId?.name
                    }
                  />
                  <ProgramsCommonGrid
                    KeyName="  Invoices Discounted"
                    KeyValue={"15"}
                  />
                  <ProgramsCommonGrid
                    KeyName=" Date of Commencement"
                    KeyValue={"DD-MM-YY"}
                  />
                  <ProgramsCommonGrid
                    KeyName=" Utilized Limit"
                    KeyValue={"60,00,000"}
                  />
                  <ProgramsCommonGrid
                    KeyName="Invoices Pending for Approval"
                    KeyValue={"5"}
                  />
                  <ProgramsCommonGrid KeyName="Invoices Due" KeyValue={"3"} />
                  <ProgramsCommonGrid
                    KeyName=" Invoices Overdue"
                    KeyValue={"6"}
                  />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
