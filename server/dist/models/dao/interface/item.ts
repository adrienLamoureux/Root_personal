import { Document } from "mongoose";
import { IItem } from "../../model/item";

export interface IItemModel extends IItem, Document {
  //custom methods for your model would be defined here 
}