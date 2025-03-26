import { UUID } from "crypto"

export interface PageHeaderProps {
  headerName: string
}

export interface CommissionProps {
  header: string,
  items: string[],
  notes: string[]
}
export interface LinkBoxProps {
  name: string[],
  link: string[],
  path: string[]
}

export interface ConfirmActionProps {
  isVisible: boolean,
  title: string | null,
  onCancel: () => void,
  onConfirm: () => void
}

export interface FormData {
  title: string,
  link: string,
  category: string,
  date_created: Date,
  date_completed: Date
}

export interface WorksProps {
  name?: string | null,
  link?: string | null,
  date?: Date,
  category?: string | null,
}
export interface WorksPropsArr {
  data: WorksProps[]
}
export interface ShowcasePropsArr {
  data: WorksProps[],
  state?: number
}

export interface EntriesProps {
  prop1: UUID,
  prop2: string | null,
  prop3?: string | null,
  prop4: Date,
  prop5?: Date | null,
  prop6: UUID,
}
export interface EntriesPropsArr {
  data: EntriesProps[]
}

export interface ButtonProps {
  text: string,
  link?: string,
}