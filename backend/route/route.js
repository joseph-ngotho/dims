var express = require("express");

var router = express.Router();

var mysqlConnection = require("../db/db");

router.get("/beneficiaries", (req, res, next) => {
  // logic here

  mysqlConnection.query(
    "SELECT * FROM dims_beneficiaries",
    (err, rows, fields) => {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

//retrieving beneficiary by id
router.get("/beneficiaries/:id", (req, res, next) => {
  mysqlConnection.query(
    "SELECT * FROM dims_beneficiaries WHERE id = ? ",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

//retrieving all beneficiary info by ID
router.get("/beneficiary/:id", (req, res, next) => {
  mysqlConnection.query(
    "SELECT * FROM dims_beneficiaries b LEFT JOIN dims_livelihoods l \
  ON l.id_beneficiaries_fk = b.id LEFT JOIN dims_livelihoods_support s ON l.type_support = s.id \
  LEFT JOIN dims_livelihoods_dates ld ON l.id = ld.id_intervention_fk\
  LEFT JOIN dims_protection p \
      ON p.id_beneficiary_fk = b.id LEFT JOIN dims_protection_dates pd ON p.id_protection = pd.id_intervention_fk\
  WHERE b.id= ? ",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

//adding new beneficiaries
router.post("/beneficiaries", (req, res, next) => {
  var newBeneficiaries = {
    individual_number: req.body.individual_number,
    beneficiary_firstName: req.body.beneficiary_firstName,
    beneficiary_lastName: req.body.beneficiary_lastName,
    id_number: req.body.id_number,
    sex: req.body.sex,
    age: req.body.age,
    disability_status: req.body.disability_status,
    type_disability: req.body.type_disability,
    status: req.body.status,
    nationality: req.body.nationality,
    date_enrolled: req.body.date_enroled,
    project: req.body.project,
    hh_head: req.body.hh_head,
    group_name: req.body.group_name,
    hh_male_size: req.body.hh_male_size,
    hh_female_size: req.body.hh_female_size,
    telephone_number: req.body.telephone_number,
    camp: req.body.camp,
    block: req.body.block,
    reffered_to: req.body.reffered_to,
    reffered_from: req.body.reffered_from,
  };

  mysqlConnection.query(
    "INSERT INTO dims_beneficiaries SET ? ",
    newBeneficiaries,
    (err, rows) => {
      if (!err) res.status(200).json("New beneficiaries successfully added!");
      else res.json(err);
    }
  );
});

//updating beneficiaries by id
router.put("/beneficiaries/:id", (req, res, next) => {
  //logic here
  var updateBeneficiaries = {
    individual_number: req.body.individual_number,
    beneficiary_firstName: req.body.beneficiary_firstName,
    beneficiary_lastName: req.body.beneficiary_lastName,
    id_number: req.body.id_number,
    sex: req.body.sex,
    age: req.body.age,
    disability_status: req.body.disability_status,
    type_disability: req.body.type_disability,
    status: req.body.status,
    nationality: req.body.nationality,
    date_enrolled: req.body.date_enroled,
    project: req.body.project,
    hh_head: req.body.hh_head,
    group_name: req.body.group_name,
    hh_male_size: req.body.hh_male_size,
    hh_female_size: req.body.hh_female_size,
    telephone_number: req.body.telephone_number,
    camp: req.body.camp,
    block: req.body.block,
    reffered_to: req.body.reffered_to,
    reffered_from: req.body.reffered_from,
  };

  mysqlConnection.query(
    "UPDATE dims_beneficiaries SET ? WHERE individual_number =" + req.params.id,
    updateBeneficiaries,
    (err, rows) => {
      if (!err) res.json("beneficiary information updated successfully");
      else res.json(err);
    }
  );
});

//deleting service  by id
router.delete("/beneficiaries/:id", (req, res, next) => {
  mysqlConnection.query(
    "DELETE FROM dims_beneficiaries WHERE individual_number = ? ",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.json("Beneficiary deleted successfully");
      else res.json(err);
    }
  );
});

router.get("/livelihoods", (req, res, next) => {
  // logic here

  mysqlConnection.query(
    "SELECT * FROM dims_livelihoods l LEFT JOIN dims_beneficiaries  b \
    ON l.id_beneficiaries_fk = b.id LEFT JOIN dims_livelihoods_support s ON l.type_support = s.id \
    LEFT JOIN dims_livelihoods_dates d ON l.id = d.id_intervention_fk",
    (err, rows, fields) => {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

//retrieving livelihoods by id
router.get("/livelihoods/:id", (req, res, next) => {
  mysqlConnection.query(
    "SELECT * FROM dims_livelihoods l LEFT JOIN dims_beneficiaries  b \
    ON l.id_beneficiaries_fk = b.id LEFT JOIN dims_livelihoods_support s ON l.type_support = s.id \
    LEFT JOIN dims_livelihoods_dates d ON l.id = d.id_intervention_fk\
		WHERE l.id_beneficiaries_fk= ? ",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

//adding new livelihoods
router.post("/livelihoods", (req, res, next) => {
  var newLivelihoods = {
    id_beneficiaries_fk: req.body.id_beneficiaries_fk,
    type_support: req.body.type_support,
  };

  mysqlConnection.query(
    "INSERT INTO dims_livelihoods SET ? ",
    newLivelihoods,
    (err, rows) => {
      if (!err)
        res.status(200).json("New livelihoods support successfully added!");
      else res.json(err);
    }
  );
});

//updating livelihoods by id
router.put("/livelihoods/:id", (req, res, next) => {
  //logic here
  var updateLivelihoods = {
    id_beneficiaries_fk: req.body.id_beneficiaries_fk,
    type_support: req.body.type_support,
  };

  mysqlConnection.query(
    "UPDATE dims_livelihoods SET ? WHERE id_beneficiaries_fk =" + req.params.id,
    updateLivelihoods,
    (err, rows) => {
      if (!err) res.json("livelihoods information updated successfully");
      else res.json(err);
    }
  );
});

//deleting livelihood  by id
router.delete("/livelihoods/:id", (req, res, next) => {
  mysqlConnection.query(
    "DELETE FROM dim_livelihoods WHERE id = ? ",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.json("Livelihood support deleted successfully");
      else res.json(err);
    }
  );
});

//adding new livelihoods dates
router.post("/livelihoods_dates", (req, res, next) => {
  var newLivelihoodsDate = {
    date_enroled: req.body.date_enroled,
    completion_date: req.body.completion_date,
    drop_date: req.body.drop_date,
    id_beneficiaries_fk: req.body.id_beneficiaries_fk,
    id_intervention_fk: req.body.id_intervention_fk,
  };

  mysqlConnection.query(
    "INSERT INTO dims_livelihoods_dates SET ? ",
    newLivelihoodsDate,
    (err, rows) => {
      if (!err)
        res
          .status(200)
          .json("New livelihoods intervention dates successfully added!");
      else res.json(err);
    }
  );
});

//updating livelihoods by id
router.put("/livelihoods_dates/:id", (req, res, next) => {
  //logic here
  var updateLivelihoodsDate = {
    date_enroled: req.body.date_enroled,
    completion_date: req.body.completion_date,
    drop_date: req.body.drop_date,
    id_beneficiaries_fk: req.body.id_beneficiaries_fk,
    id_intervention_fk: req.body.id_intervention_fk,
  };

  mysqlConnection.query(
    "UPDATE dims_livelihoods_dates SET ? WHERE id_beneficiaries_fk =" +
      req.params.id,
    updateLivelihoodsDate,
    (err, rows) => {
      if (!err)
        res.json(
          "livelihoods intervention dates information updated successfully"
        );
      else res.json(err);
    }
  );
});

//Protection crud
//retrieving protection support
router.get("/protection", (req, res, next) => {
  mysqlConnection.query(
    "SELECT * FROM dims_protection p LEFT JOIN dims_beneficiaries  b \
      ON p.id_beneficiary_fk = b.id LEFT JOIN dims_protection_dates d ON p.id_protection = d.id_intervention_fk",
    (err, rows, fields) => {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

//retrieving protection by id
router.get("/protection/:id", (req, res, next) => {
  mysqlConnection.query(
    "SELECT * FROM dims_protection WHERE id_protection = ? ",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

//adding new protection support
router.post("/protection", (req, res, next) => {
  var newProtection = {
    id_beneficiary_fk: req.body.id_beneficiaries_fk,
    protection_support_recieved: req.body.type_support,
  };

  mysqlConnection.query(
    "INSERT INTO dims_protection SET ? ",
    newProtection,
    (err, rows) => {
      if (!err) res.status(200).json("New protection successfully added!");
      else res.json(err);
    }
  );
});

//updating protection by id
router.put("/protection/:id", (req, res, next) => {
  //logic here
  var updateProtection = {
    id_beneficiary_fk: req.body.id_beneficiaries_fk,
    protection_support_recieved: req.body.type_support,
  };

  mysqlConnection.query(
    "UPDATE dims_protection SET ? WHERE id_beneficiary_fk =" + req.params.id,
    updateProtection,
    (err, rows) => {
      if (!err) res.json(" Intervention updated successfully");
      else res.json(err);
    }
  );
});

//deleting protection  by id
router.delete("protection/:id", (req, res, next) => {
  mysqlConnection.query(
    "DELETE FROM dim_protection WHERE id_protection = ? ",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.json("Protection support deleted successfully");
      else res.json(err);
    }
  );
});

//adding new protection dates
router.post("/protection_dates", (req, res, next) => {
  var newProtectionDate = {
    date_enroled: req.body.date_enroled,
    completion_date: req.body.completion_date,
    drop_date: req.body.drop_date,
    id_beneficiary_fk: req.body.id_beneficiaries_fk,
    id_intervention_fk: req.body.id_intervention_fk,
  };

  mysqlConnection.query(
    "INSERT INTO dims_protection_dates SET ? ",
    newProtectionDate,
    (err, rows) => {
      if (!err)
        res
          .status(200)
          .json("New protection intervention dates successfully added!");
      else res.json(err);
    }
  );
});

//updating protection by id
router.put("/protection_dates/:id", (req, res, next) => {
  //logic here
  var updateProtectionDate = {
    date_enroled: req.body.date_enroled,
    completion_date: req.body.completion_date,
    drop_date: req.body.drop_date,
    id_beneficiaries_fk: req.body.id_beneficiaries_fk,
    id_intervention_fk: req.body.id_intervention_fk,
  };

  mysqlConnection.query(
    "UPDATE dims_protection_dates SET ? WHERE id_beneficiaries_fk =" +
      req.params.id,
    updateProtectionDate,
    (err, rows) => {
      if (!err)
        res.json(
          "Protection intervention dates information updated successfully"
        );
      else res.json(err);
    }
  );
});

module.exports = router;
