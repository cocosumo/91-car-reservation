declare namespace kintone.types {
  interface CarAppFields {
    Text_0: kintone.fieldTypes.SingleLineText;
    店舗: kintone.fieldTypes.SingleLineText;
    文字列__1行__1: kintone.fieldTypes.SingleLineText;
    textColor: kintone.fieldTypes.SingleLineText;
    Date: kintone.fieldTypes.Date;
    ドロップダウン_0: kintone.fieldTypes.DropDown;
    Number: kintone.fieldTypes.Number;
    bgColor: kintone.fieldTypes.SingleLineText;
    号車: kintone.fieldTypes.SingleLineText;
    日付: kintone.fieldTypes.Date;
    履歴: {
      type: "SUBTABLE";
      value: Array<{
        id: string;
        value: {
          文字列__1行__2: kintone.fieldTypes.SingleLineText;
          Number_0: kintone.fieldTypes.Number;
          ドロップダウン: kintone.fieldTypes.DropDown;
          日付_0: kintone.fieldTypes.Date;
        };
      }>;
    };
  }
  interface SavedCarAppFields extends CarAppFields {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    更新者: kintone.fieldTypes.Modifier;
    作成者: kintone.fieldTypes.Creator;
    レコード番号: kintone.fieldTypes.RecordNumber;
    更新日時: kintone.fieldTypes.UpdatedTime;
    作成日時: kintone.fieldTypes.CreatedTime;
  }
}
